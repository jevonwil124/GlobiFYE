<?php
/*
Plugin Name: Greeting Shortcode
Description: A simple plugin that adds a [greeting] shortcode to display a welcome message.
Version: 1.0
Author: Your Name
*/

// Function to handle the shortcode
function greeting_shortcode() {
    return 'Welcome to My Site!';
}

// Register the shortcode with WordPress
add_shortcode('greeting', 'greeting_shortcode');
