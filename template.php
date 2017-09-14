<?php

/**
 * @file
 * Template overrides as well as (pre-)process and alter hooks for the
 * Open Charity Theme theme.
 */


function opencharity_menu_tree(&$variables){
	return '<ul class="menu">' . $variables['tree'] . '</ul>';
}

/**
 * Implements hook_preprocess_page().
 */
function opencharity_preprocess_page(&$variables) {
	// add bxslider to home page
	if($variables['is_front']==true){
		if (($library = libraries_load('bxslider')) && !empty($library['loaded'])) {
			// Do something with the library here.
		}
	}
}


function	opencharity_menu_link(array $variables){
	$element = $variables['element'];
	$sub_menu = '';

	if ($element['#below']) {
		$sub_menu = drupal_render($element['#below']);
	}
	$output = l($element['#title'], $element['#href'], $element['#localized_options']);
	return '<li' . drupal_attributes($element['#attributes']) . '>' . $output . $sub_menu . "</li>\n";
}
