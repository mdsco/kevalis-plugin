<?php
/*
Plugin Name: Kevalis Plugin
Description: Kevalis mods for Fancy Product Designer
Author: Mike Scoboria
Author URI:
Version: 0.0.1
*/

function kevalis_plugin_script_enqueue(){

	wp_register_style('Kevalis Style', plugins_url( '/css/kevalis-styles.css', __FILE__ ), array(), '0.0.1', 'all');

	wp_enqueue_style('Kevalis Style');

    wp_register_script( 'Kevalis Script', plugins_url( '/js/kevalis-plugin.js', __FILE__ ), array('jquery') );

	wp_enqueue_script('Kevalis Script');
}

add_action('wp_enqueue_scripts', 'kevalis_plugin_script_enqueue');