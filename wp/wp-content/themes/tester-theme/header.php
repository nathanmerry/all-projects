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


	<div class="c__wrapper">

		<header class="">

			<div class="container">
			
				<div class="c_side-guttering">
			
					<div class="c_logo-toggle">
					
					  <div class="l_header_row1">
					  
						<?php 
							$custom_logo_id = get_theme_mod( 'custom_logo' );
							$image = wp_get_attachment_image_src( $custom_logo_id , 'full' );
						?>
					  
						<a class="c_logo-wrapper t_link" href="<?php echo home_url(); ?>">
						
						  <img class="i_logo" src="<?php echo $image[0]; ?>" />
						  
						</a>
						
						<div id="js-nav-toggle" class="b_nav-toggle">
						
						  <div class="b_nav-toggle_bar grey bar1"></div>
						  <div class="b_nav-toggle_bar grey bar2"></div>
						  <div class="b_nav-toggle_bar grey bar3"></div>
						  
						</div>			
					  </div>	  
					</div>
				</div>
				
				<div id="js-nav-popup-container" class="c_header_nav a_nav">
				
				  <div class="c_nav-guttering">
										
					<?php wp_nav_menu (	
						array(
							'theme_location' => 'top-menu',
							'menu_class' => 'b_list-reset l_nav c_nav a_nav',
							'menu_id' => 'js-nav-popup'
							
						)										
					)?>
					
				  </div>
				  
				 </div>
				  
			  </div>
			  
	

</header>























