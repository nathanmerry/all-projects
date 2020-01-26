<?php if (have_posts()) : while(have_posts()) : the_post();?>

	<?php 
		$object = get_queried_object();
		$field = get_field( 'field_name', $object->name );
		var_dump( $field );
	?>

<?php endwhile; endif?>

   