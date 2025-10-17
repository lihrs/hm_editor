/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.plugins.add( 'containerstyle', {
	requires: 'dialog',
	icons: 'containerstyle', // %REMOVE_LINE_CORE%
	init: function( editor ) {
		var command = editor.addCommand( 'containerstyle', new CKEDITOR.dialogCommand( 'containerstyle' ) );

		editor.ui.addButton && editor.ui.addButton( 'Containerstyle', {
			label: '容器样式',
			command: 'containerstyle',
			toolbar: 'styles'
		} );

		CKEDITOR.dialog.add( 'containerstyle', this.path + 'dialogs/containerstyle.js' );
	}
} );
