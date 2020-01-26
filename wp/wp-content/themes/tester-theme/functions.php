<?php
ob_start();

function load_stylesheets()
{
    // wp_register_style('bootstrap', get_template_directory_uri() . '/css/bootstrap.css',
    	// array(), false, 'all');
    // wp_enqueue_style('bootstrap');

    wp_register_style('main', get_template_directory_uri() . '/css/main.css',
    	array(), false, 'all');
    wp_enqueue_style('main');
	
	wp_register_style('animations', get_template_directory_uri() . '/css/animations.css',
    	array(), false, 'all');
    wp_enqueue_style('animations');
	
	wp_register_style('base', get_template_directory_uri() . '/css/base.css',
    	array(), false, 'all');
    wp_enqueue_style('base');
	
	wp_register_style('buttons-style', get_template_directory_uri() . '/css/buttons.css',
    	array(), false, 'all');
    wp_enqueue_style('buttons-style');
	
	wp_register_style('containers', get_template_directory_uri() . '/css/containers.css',
    	array(), false, 'all');
    wp_enqueue_style('containers');
	
	wp_register_style('headers', get_template_directory_uri() . '/css/headers.css',
    	array(), false, 'all');
    wp_enqueue_style('headers');
	
	wp_register_style('images', get_template_directory_uri() . '/css/images.css',
    	array(), false, 'all');
    wp_enqueue_style('images');
	
	wp_register_style('layout', get_template_directory_uri() . '/css/layout.css',
    	array(), false, 'all');
    wp_enqueue_style('layout');
	
	wp_register_style('theme', get_template_directory_uri() . '/css/theme.css',
    	array(), false, 'all');
    wp_enqueue_style('theme');
	
	wp_register_style('placeholders', get_template_directory_uri() . '/css/placeholders.css',
    	array(), false, 'all');
    wp_enqueue_style('placeholders');
		
	
	wp_register_style('test', get_template_directory_uri() . '/style.css',
    	array(), false, 'all');
    wp_enqueue_style('test');
}



function load_fonts() 
{
    wp_register_style( 'google-font-open_sans', 'https://fonts.googleapis.com/css?family=Open+Sans:200,300,400,500,600&display=swap' );
    wp_enqueue_style( 'google-font-open_sans' );
}


add_action('wp_enqueue_scripts', 'load_stylesheets');


function load_js()
{
    wp_register_script('navjs', get_template_directory_uri() . '/js/nav.js', '', false, true);
    wp_enqueue_script('navjs');

	wp_register_script('stats', get_template_directory_uri() . '/js/stat-counter.js', '', false, true);
    wp_enqueue_script('stats'); 
}

add_action('wp_enqueue_scripts', 'load_js');

add_theme_support('menus');

add_theme_support('post-thumbnails');

add_theme_support( 'custom-logo' );

register_nav_menus(

	array(
	
		'top-menu' => __('Top Menu', 'theme'),
		'footer-menu' => __('Footer Menu', 'theme')
	)
);

function news_post_type() {
	
	$args = array(
	
		'labels' => array(
			'name' => 'News',
			'singular_name' => 'Artical'
		),
		'hierarchical' => false,
		'public' => true,
		'has_archive' => true,
		'menu_icon' => 'dashicons-media-document',
		'supports' => array('title', 'editor', 'thumbnail'),
		're-write' => array('slug' => 'news-archive')
	);
	
	register_post_type('News-Archive', $args);
}

add_action('init', 'news_post_type');


function staff_post_type() {
	
	$args = array(
	
		'labels' => array(
			'name' => 'Staff',
			'singular_name' => 'Staff'
		),
		'hierarchical' => false,
		'public' => true,
		'has_archive' => true,
		'menu_icon' => 'dashicons-businessman',
		'supports' => array('title', 'editor', 'thumbnail'),
		're-write' => array('slug' => 'staff')
	);
	
	register_post_type('staff', $args);
}

add_action('init', 'staff_post_type');


function trustee_post_type() {
	
	$args = array(
	
		'labels' => array(
			'name' => 'Trustees',
			'singular_name' => 'Trustee'
		),
		'hierarchical' => false,
		'public' => true,
		'has_archive' => true,
		'menu_icon' => 'dashicons-groups',
		'supports' => array('title', 'editor', 'thumbnail'),
		're-write' => array('slug' => 'trustees')
	);
	
	register_post_type('Trustees', $args);
}

add_action('init', 'trustee_post_type');


function achievements_post_type() {
	
	$args = array(
	
		'labels' => array(
			'name' => 'Achievements',
			'singular_name' => 'Achievement'
		),
		'hierarchical' => false,
		'public' => true,
		'has_archive' => true,
		'menu_icon' => 'dashicons-awards',
		'supports' => array('title', 'editor', 'thumbnail'),
		're-write' => array('slug' => 'achievements')
	);
	
	register_post_type('Achievements', $args);
}

add_action('init', 'achievements_post_type');



?>





