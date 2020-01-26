<?php

function load_stylesheets()
{
    wp_register_style('bootstrap', get_template_directory_uri() . '/css/bootstrap.css',
    	array(), false, 'all');
    wp_enqueue_style('bootstrap');

    wp_register_style('main', get_template_directory_uri() . '/style.css',
    	array(), false, 'all');
    wp_enqueue_style('main');

}

add_action('wp_enqueue_scripts', 'load_stylesheets');


function loadjs()
{
    wp_register_script('customjs', get_template_directory_uri() . '/js/scripts.js', '', 1, true);
    wp_enqueue_script('customjs');    
}

add_action('wp_enqueue_scripts', 'loadjs');



add_theme_support('menus');

add_theme_support('post-thumbnails');

add_theme_support( 'custom-logo' );



register_nav_menus(

	array(
	
		'top-menu' => __('Top Menu', 'theme'),
		'footer-menu' => __('Footer Menu', 'theme')
	
	)

)




?>

