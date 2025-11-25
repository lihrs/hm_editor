/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.plugins.add( 'docprops', {
	requires: 'wysiwygarea,dialog,colordialog',
	// jscs:disable maximumLineLength
	lang: 'en,en-au,en-ca,en-gb,zh,zh-cn', // %REMOVE_LINE_CORE%
	// jscs:enable maximumLineLength
	icons: 'docprops,docprops-rtl', // %REMOVE_LINE_CORE%
	hidpi: true, // %REMOVE_LINE_CORE%
	init: function( editor ) {
		var cmd = new CKEDITOR.dialogCommand( 'docProps' );
		// Only applicable on full page mode.
		cmd.modes = { wysiwyg: editor.config.fullPage };
		cmd.allowedContent = {
			body: {
				styles: '*',
				attributes: 'dir'
			},
			html: {
				attributes: 'lang,xml:lang'
			}
		};
		cmd.requiredContent = 'body';

		editor.addCommand( 'docProps', cmd );
		CKEDITOR.dialog.add( 'docProps', this.path + 'dialogs/docprops.js' );

		editor.ui.addButton && editor.ui.addButton( 'DocProps', {
			label: editor.lang.docprops.label,
			command: 'docProps',
			toolbar: 'document,30'
		} );
	}
} );
