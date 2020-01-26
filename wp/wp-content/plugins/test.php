<?php
/**
 * Plugin Name: Extra Metabox Content Editor
 */

/**
 * Adds a box to the main column on the Post and Page edit screens.
 */
function hurtigtech_add_custom_box() {

    $screens = array( 'post', 'page' );

    foreach ( $screens as $screen ) {

        add_meta_box(
            'hrutigtech_extra_content_section',
            __( 'My Post Extra Content', 'hurtigtech_translations' ),
            'hurtigtech_inner_custom_box',
            $screen
        );
    }
}
add_action( 'add_meta_boxes', 'hurtigtech_add_custom_box' );

/**
 * Prints the box content.
 * 
 * @param WP_Post $post The object for the current post/page.
 */
function hurtigtech_inner_custom_box( $post ) {

  // Add an nonce field so we can check for it later.
  wp_nonce_field( 'hurtigtech_inner_custom_box', 'hurtigtech_inner_custom_box_nonce' );

  /*
   * Use get_post_meta() to retrieve an existing value
   * from the database and use the value for the form.
   */
  $value = get_post_meta( $post->ID, '_hurtigtech_extra_content', true );
  echo '<br />';
  wp_editor( $value, "hurtigtech_extra_content_editor");
}

/**
 * When the post is saved, saves our custom data.
 *
 * @param int $post_id The ID of the post being saved.
 */
function hurtigtech_save_postdata( $post_id ) {

  /*
   * We need to verify this came from the our screen and with proper authorization,
   * because save_post can be triggered at other times.
   */

  // Check if our nonce is set.
  if ( ! isset( $_POST['hurtigtech_inner_custom_box_nonce'] ) )
    return $post_id;

  $nonce = $_POST['hurtigtech_inner_custom_box_nonce'];

  // Verify that the nonce is valid.
  if ( ! wp_verify_nonce( $nonce, 'hurtigtech_inner_custom_box' ) )
      return $post_id;

  // If this is an autosave, our form has not been submitted, so we don't want to do anything.
  if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) 
      return $post_id;

  // Check the user's permissions.
  if ( 'page' == $_POST['post_type'] ) {

    if ( ! current_user_can( 'edit_page', $post_id ) )
        return $post_id;

  } else {

    if ( ! current_user_can( 'edit_post', $post_id ) )
        return $post_id;
  }

  /* OK, its safe for us to save the data now. */

  // Sanitize user input.
  $mydata = sanitize_text_field( $_POST['hurtigtech_extra_content_editor'] );

  // Update the meta field in the database.
  update_post_meta( $post_id, '_hurtigtech_extra_content', $mydata );


}
add_action( 'save_post', 'hurtigtech_save_postdata' );