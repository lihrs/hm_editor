/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

/**
 * @fileOverview Special Character plugin
 */

CKEDITOR.plugins.add( 'specialchar', {
	// List of available localizations.
	// jscs:disable
	availableLangs: {en:1,'en-au':1,'en-ca':1,'en-gb':1,zh:1,'zh-cn':1 },
	lang: 'en,en-au,en-ca,en-gb,zh,zh-cn', // %REMOVE_LINE_CORE%
	// jscs:enable
	requires: 'dialog',
	icons: 'specialchar', // %REMOVE_LINE_CORE%
	hidpi: true, // %REMOVE_LINE_CORE%
	init: function( editor ) {
		var pluginName = 'specialchar',
			plugin = this;

		// Register the dialog.
		CKEDITOR.dialog.add( pluginName, this.path + 'dialogs/specialchar.js' );

		editor.addCommand( pluginName, {
			exec: function() {
				var langCode = editor.langCode;
				langCode =
					plugin.availableLangs[ langCode ] ? langCode :
					plugin.availableLangs[ langCode.replace( /-.*/, '' ) ] ? langCode.replace( /-.*/, '' ) :
					'en';

				CKEDITOR.scriptLoader.load( CKEDITOR.getUrl( plugin.path + 'dialogs/lang/' + langCode + '.js' ), function() {
					CKEDITOR.tools.extend( editor.lang.specialchar, plugin.langEntries[ langCode ] );
					editor.openDialog( pluginName );
				} );
			},
			modes: { wysiwyg: 1 },
			canUndo: false
		} );

		// Register the toolbar button.
		editor.ui.addButton && editor.ui.addButton( 'SpecialChar', {
			label: editor.lang.specialchar.toolbar,
			command: pluginName,
			toolbar: 'insert,50'
		} );
	}
} );

/**
 * The list of special characters visible in the "Special Character" dialog window.
 *
 *		config.specialChars = [ '&quot;', '&rsquo;', [ '&custom;', 'Custom label' ] ];
 *		config.specialChars = config.specialChars.concat( [ '&quot;', [ '&rsquo;', 'Custom label' ] ] );
 *
 * @cfg
 * @member CKEDITOR.config
 */
CKEDITOR.config.specialChars = [
	'△','▽','○','◇','□','☆','☑','√','✔','☒','×','✘','※','↑','↓', '→', '←',
	'①','②','③','④','⑤','⑥','⑦','⑧','⑨','⑩',
	'Ⅰ','Ⅱ','Ⅲ','Ⅳ','Ⅴ','Ⅵ','Ⅶ','Ⅷ','Ⅸ','Ⅹ','Ⅺ','Ⅻ','α','β','γ',
	'＋','－','','÷','＝','＜','＞','≤','≥','≈','≒','≠','±','∶','∵','∴','∷',
	'%','‰','½','⅓' ,'⅔' ,'¼', '¾', '℃', '℉', '㎎', '㎏', 'μm', '㎜', '㎝', '㎞', 'mol', 'ml', '㏄', 'm³', '㎡',
	'mmol', 'mmol/L', 'Kcal','ummol/L', 'umol/L', 'g/L','×10^9/L','×10^12/L','pmol/L','nmol/L','uIU/ml','ng/ml','IU/ml','U/ml','mmHg','mmH2O','mg/dl','PaO2','PaCO2'];
CKEDITOR.config.allSupSpecialChar = ['⁰', '¹', '²', '³', '⁴', '⁵', '⁶', '⁷', '⁸', '⁹',
	'⁺', '⁻', '⁼', '⁽', '⁾', 'ⁿ', 'º', '˙', 'ᵃ', 'ᵇ', 'ᶜ', 'ᵈ', 'ᵉ', 'ᵍ', 'ʰ',
	'ⁱ', 'ʲ', 'ᵏ', 'ˡ', 'ᵐ', 'ⁿ', 'ᵒ', 'ᵖ', 'ʳ', 'ˢ', 'ᵗ', 'ᵘ', 'ᵛ', 'ʷ', 'ˣ',
	'ʸ', 'ᙆ', 'ᴬ', 'ᴮ', 'ᒼ', 'ᴰ', 'ᴱ', 'ᴳ', 'ᴴ', 'ᴵ', 'ᴶ', 'ᴷ', 'ᴸ', 'ᴹ', 'ᴺ',
	'ᴼ', 'ᴾ', 'ᴿ', 'ˢ', 'ᵀ', 'ᵁ', 'ᵂ', 'ˣ', 'ᵞ', 'ᙆ', 'ˀ', 'ˁ', 'ˤ', 'ʱ', 'ʴ',
	'ʵ', 'ʶ', 'ˠ', 'ᴭ', 'ᴯ', 'ᴲ', 'ᴻ', 'ᴽ', 'ᵄ', 'ᵅ', 'ᵆ', 'ᵊ', 'ᵋ', 'ᵌ', 'ᵑ',
	'ᵓ', 'ᵚ', 'ᵝ', 'ᵞ', 'ᵟ', 'ᵠ', 'ᵡ', 'ᵎ', 'ᵔ', 'ᵕ', 'ᵙ', 'ᵜ', 'ᶛ', 'ᶜ', 'ᶝ',
	'ᶞ', 'ᶟ', 'ᶡ', 'ᶣ', 'ᶤ', 'ᶥ', 'ᶦ', 'ᶧ', 'ᶨ', 'ᶩ', 'ᶪ', 'ᶫ', 'ᶬ', 'ᶭ', 'ᶮ',
	'ᶯ', 'ᶰ', 'ᶱ', 'ᶲ', 'ᶳ', 'ᶴ', 'ᶵ', 'ᶶ', 'ᶷ', 'ᶸ', 'ᶹ', 'ᶺ', 'ᶼ', 'ᶽ', 'ᶾ',
	'ᶿ', 'ჼ', 'ᒃ', 'ᕻ', 'ᑦ', 'ᒄ', 'ᕪ', 'ᑋ', 'ᑊ', 'ᔿ', 'ᐢ', 'ᐤ', 'ᔆ', 'ᙚ', 'ᐡ', 'ᘁ',
	'ᐜ', 'ᕽ', 'ᙆ', 'ᙇ', 'ᒼ', 'ᒢ', 'ᒻ', 'ᔿ', 'ᙚ', 'ᐪ', 'ᓑ', 'ᘁ', 'ᐜ', 'ᕽ', 'ᙆ', 'ᙇ', '˂', '˃', '*', 'º',
	'㆒', '㆓', '㆔', '㆕', '㆖', '㆗', '㆘', '㆙', '㆚', '㆛', '㆜', '㆝', '㆞', '㆟'];
CKEDITOR.config.allSubSpecialChar = ['₀', '₁', '₂', '₃', '₄', '₅', '₆', '₇', '₈', '₉', '₊', '₋', '₌', '₍', '₎',
	'ₐ', 'ₑ', 'ₒ', 'ₓ', 'ₔ', 'ᵢ', 'ₒ', 'ᵣ', 'ᵤ', 'ᵥ', 'ₓ', '᙮', 'ᵤ', 'ᵩ', 'ᵦ', '˪', '៳', '៷', 'ₒ', 'ᵨ', '៴', 'ᵤ', 'ᵪ', 'ᵧ'];
