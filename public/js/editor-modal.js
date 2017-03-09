apos.define('apostrophe-pubmed-editor-modal', {
  extend: 'apostrophe-pieces-editor-modal',

  construct: function(self, options) {
    var superBeforeShow = self.beforeShow;

    self.beforeShow = function(callback) {
      return superBeforeShow(function(err) {
        if (err) {
          return callback(err);
        }

        if (!options.pubmedConfig) {
          console.log('PubMed module needs a field to enhance and sync map');
          return callback(null);
        }

        if (!options.pubmedConfig.enhanceField) {
          console.log('Need a field to enhance with the sync button. This is the name of a field in your schema (should be something like pubmedid)');
          return callback(null);
        }

        if (!options.pubmedConfig.mapFields) {
          console.log('Need a mapFields object in pubmed modules config. { "apostropheField" : "pubmedField" }');
          return callback(null);
        }

        var animationClass = "apos-pubmed-autocompleted"
        var $enhanceTarget = self.$el.find('[data-name="'+ options.pubmedConfig.enhanceField +'"]');
        var enhanceTargetLabel = $enhanceTarget.find('.apos-field-label').text();

        $enhanceTarget
          .addClass('apos-pubmed-enhanced-fieldset')
          .append('<a href="#" class="apos-button apos-pubmed-sync-button" data-pubmed-sync-button>Sync from PubMed</a>');

        self.$el.find('[data-pubmed-sync-button]').on('click', function() {

          var id = $enhanceTarget.find('input').val();

          var request = $.ajax({
            url: self.action + '/pubmed/' + id,
            method: "GET",
            dataType: "json"
          });

          request.always(function() {
            apos.ui.globalBusy(true);
          });

          request.done(function(response) {
            apos.ui.globalBusy(false);

            if (response.error) {
              $enhanceTarget
                .removeClass('apos-error')
                .addClass('apos-warning');

                if ($enhanceTarget.find('.apos-field-help').length) {
                  $enhanceTarget.find('.apos-field-help').attr('data-content', 'Warning: ' + response.body);
                } else {
                  $enhanceTarget.find('.apos-field-label').append(' ('+ response.body +')');
                }
                return;
            }

            self.$el.find('input').on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
              $(this).removeClass(animationClass);
            })

            $enhanceTarget
              .removeClass('apos-warning')
              .removeClass('apos-error')
              .addClass('pl-success')
              .find('.apos-field-label').text(enhanceTargetLabel)

            Object.keys(options.pubmedConfig.mapFields).map(function (key) {
              self.$el.find('[name="'+ key +'"]')
                .val(response.body[options.pubmedConfig.mapFields[key]])
                .addClass(animationClass)
            });

            // set slug on its own
            self.$el.find('[name="slug"]')
              .val(apos.utils.slugify(response.body.title))
              .addClass(animationClass)

          }); // end '.done'

          request.fail(function( jqXHR, textStatus ) {
            console.log(jqXHR);
            console.log( "Request failed: " + textStatus );
            $enhanceTarget
              .removeClass('apos-warning')
              .addClass('apos-error')

            if ($enhanceTarget.find('.apos-field-help').length) {
              $enhanceTarget.find('.apos-field-help').attr('data-content', 'Error: ' + textStatus);
            } else {
              $enhanceTarget.find('.apos-field-label').append(' (Error: '+ textStatus +')');
            }

          });

        })

        return callback(null);
      });
    };
  }
});