<?php
/*
Plugin Name: Kavalis Plugin
Description: Kavalis mods for Fancy Product Designer
Author: Mike Scoboria
Author URI:
Version: 1.0.0
*/

function kavalis_plugin_script_enqueue(){

	wp_register_style('Kavalis Style', plugins_url( '/css/kavalis-styles-min.css', __FILE__ ), array(), '1.0.0', 'all');

	wp_enqueue_style('Kavalis Style');

    wp_register_script( 'Kavalis Script', plugins_url( '/js/kavalis-plugin.js', __FILE__ ), array('jquery') );

	wp_enqueue_script('Kavalis Script');
}

add_action('wp_enqueue_scripts', 'kavalis_plugin_script_enqueue');