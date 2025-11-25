/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

/**
 * @fileOverview Plugin definition for the a11yhelp, which provides a dialog
 * with accessibility related help.
 */

( function() {
	var pluginName = 'a11yhelp',
		commandName = 'a11yHelp';

	CKEDITOR.plugins.add( pluginName, {
		requires: 'dialog',

		// List of available localizations.
		// jscs:disable
		availableLangs: { en:1,'en-gb':1,zh:1,'zh-cn':1 },
		// jscs:enable

		init: function( editor ) {
			var plugin = this;
			editor.addCommand( commandName, {
				exec: function() {
					var langCode = editor.langCode;
					langCode =
						plugin.availableLangs[ langCode ] ? langCode :
						plugin.availableLangs[ langCode.replace( /-.*/, '' ) ] ? langCode.replace( /-.*/, '' ) :
						'en';

					CKEDITOR.scriptLoader.load( CKEDITOR.getUrl( plugin.path + 'dialogs/lang/' + langCode + '.js' ), function() {
						editor.lang.a11yhelp = plugin.langEntries[ langCode ];
						editor.openDialog( commandName );
					} );
				},
				modes: { wysiwyg: 1, source: 1 },
				readOnly: 1,
				canUndo: false
			} );

			editor.setKeystroke( CKEDITOR.ALT + 48 /*0*/, 'a11yHelp' );
			CKEDITOR.dialog.add( commandName, this.path + 'dialogs/a11yhelp.js' );

			editor.on( 'ariaEditorHelpLabel', function( evt ) {
				evt.data.label = editor.lang.common.editorHelp;
			} );
		}
	} );
} )();
