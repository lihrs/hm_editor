/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

/**
 * @fileOverview Horizontal Page Break.
 */

// Register a plugin named "newpage".
CKEDITOR.plugins.add( 'newpage', {
	// jscs:disable maximumLineLength
	lang: 'en,en-au,en-ca,en-gb,zh,zh-cn', // %REMOVE_LINE_CORE%
	// jscs:enable maximumLineLength
	icons: 'newpage,newpage-rtl', // %REMOVE_LINE_CORE%
	hidpi: true, // %REMOVE_LINE_CORE%
	init: function( editor ) {
		editor.addCommand( 'newpage', { modes: { wysiwyg: 1, source: 1 },

			exec: function( editor ) {
				var command = this;
				editor.setData( editor.config.newpage_html || '', function() {
					editor.focus();
					// Save the undo snapshot after all document changes are affected. (http://dev.ckeditor.com/ticket/4889)
					setTimeout( function() {
						editor.fire( 'afterCommandExec', {
							name: 'newpage',
							command: command
						} );
						editor.selectionChange();

					}, 200 );
				} );
			},
			async: true
		} );

		editor.ui.addButton && editor.ui.addButton( 'NewPage', {
			label: editor.lang.newpage.toolbar,
			command: 'newpage',
			toolbar: 'document,20'
		} );
	}
} );

/**
 * The HTML to load in the editor when the "new page" command is executed.
 *
 *		config.newpage_html = '<p>Type your text here.</p>';
 *
 * @cfg {String} [newpage_html='']
 * @member CKEDITOR.config
 */
