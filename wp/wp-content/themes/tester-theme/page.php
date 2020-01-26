<?php get_header();?>

	<main>

		<div class="container">
		
			<div class="c__post">
		
				<div class="c_side-guttering">

					<h1><?php the_title();?></h1>

					<?php if (have_posts()) : while(have_posts()) : the_post();?>

						<?php the_content();?>

					<?php endwhile; endif?>
							
				</div>
			
			</div>

		</div>
	
	</main>


<?php get_footer();?>

