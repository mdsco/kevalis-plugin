<?php
/*
Plugin Name: Kevalis Plugin
Description: Kevalis mods for Fancy Product Designer
Author: Mike Scoboria
Author URI:
Version: 0.1
*/

function twentysixteen_child_scripts(){

    wp_register_script( 'Kevalis Plugin', plugins_url( '/js/kevalis-plugin.js', __FILE__ ), array('jquery') );

	wp_enqueue_script('Kevalis Plugin');
}

add_action('wp_enqueue_scripts', 'twentysixteen_child_scripts');