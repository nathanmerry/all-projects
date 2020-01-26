<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <?php wp_head();?>
</head>



<body <?php body_class();?>>


<header>

	<div class="container">
	
		<?php 
			$custom_logo_id = get_theme_mod( 'custom_logo' );
			$image = wp_get_attachment_image_src( $custom_logo_id , 'full' );
		?>
		<img src="<?php echo $image[0]; ?>" class="header-logo" alt="">
		
		<?php wp_nav_menu (	
			array(
				'theme_location' => 'top-menu',
				'menu_class' => 'top-nav'
			)
		)?>
	</div>

</header>