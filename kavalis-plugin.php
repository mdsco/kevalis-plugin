<?php
/*
Plugin Name: Kavalis Plugin
Description: Kavalis mods for Fancy Product Designer
Author: Mike Scoboria
Author URI:
Version: 1.0.0
*/


function kavalis_register(){
	wp_register_style('kavalis-style', plugins_url( '/css/kavalis-styles-min.css', __FILE__ ), array(), '1.0.0', 'all');
    wp_register_script( 'kevalis-script', plugins_url( '/js/kavalis-plugin-min.js', __FILE__ ), array('jquery'));
}

function kavalis_plugin_script_enqueue(){
	wp_enqueue_style('kavalis-style');
}

function footer_handler() {
	wp_enqueue_script( 'kevalis-script' );
}

add_action( 'init', 'kavalis_register', 30 );
add_action('wp_enqueue_scripts', 'kavalis_plugin_script_enqueue');
add_action( 'wp_footer', 'footer_handler' );
