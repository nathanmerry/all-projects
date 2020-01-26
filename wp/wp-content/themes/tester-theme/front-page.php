
<?php get_header();?>
	
	<main>
	
	<div class="c__post">
			
		<section>
		
			<div class="container">
		
			  <div class="c_side-guttering">
			  
				<artical>
				
				  <div class="c__item">
				  
					<div class="l_news-card">
					
					  <div class="l_news-card_header">
					  
						<h2 class="h_artical h_artical--card">
						
						  <?php the_field('section_1_header') ?>
						  
						</h2>
					  </div>
					  <div class="l_news-card_media">
					  
						<?php the_field('section_1_media') ?>
						
					  </div>
					  <div class="l_news-card_description">
						<p>
                    
							<?php the_field('section_1_description') ?>
						
						</p>
					
                    <button class="b_btn">Read More</button>
                  </div>
                </div>
              </div>
            </artical>
			
			<artical>
				
				  <div class="c__item">
				  
					<div class="l_news-card">
					
					  <div class="l_news-card_header--right">
					  
						<h2 class="h_artical h_artical--card">
						
						  <?php the_field('section_2_header') ?>
						  
						</h2>
					  </div>
					  <div class="l_news-card_media--right">
					  
						<?php the_field('section_2_media') ?>
						
					  </div>
					  <div class="l_news-card_description--right">
						<p>
                    
							<?php the_field('section_2_description') ?>
						
						</p>
					
                    <button class="b_btn">Read More</button>
                  </div>
                </div>
              </div>
            </artical>
			
			<artical>
				
				  <div class="c__item">
				  
					<div class="l_news-card">
					
					  <div class="l_news-card_header">
					  
						<h2 class="h_artical h_artical--card">
						
						  <?php the_field('section_3_header') ?>
						  
						</h2>
					  </div>
					  
					  <div class="l_news-card_media">
					  
						<?php 
						$image = get_field('section_3_media');
						if( !empty( $image ) ): ?>
							<img src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" class="i_card" />
						<?php endif; ?>
					  
						
					  </div>
					  <div class="l_news-card_description">
						<p>
                    
							<?php the_field('section_3_description') ?>
						
						</p>
					
                    <button class="b_btn">Read More</button>
                  </div>
                </div>
              </div>
            </artical>
          </div>
        </div>
      </section>
	  
	  	  
	  <section>
	  
        <div class="container">
		
          <div class="c_side-guttering">
		  
            <h2 class="h_alone"><?php the_field('section_4_5_header') ?></h2>
			
            <div class="l_row--mob">
			
              <div class="t__card c_card c_card-bottom--left">
			  
                <artical>
				
                  <h3 class="h_artical"><?php the_field('section_4_header') ?></h3>
				  
                  <p>
                    <?php the_field('section_4_description') ?>
                  </p>
                </artical>
              </div>
			  
              <div class="t__card c_card c_card-bottom--right">
			  
                <artical>
				
                  <h3 class="h_artical"><?php the_field('section_5_header') ?></h3>
				  
                  <p>
                    <?php the_field('section_5_description') ?>
                  </p>
                </artical>
              </div>
            </div>
          </div>
        </div>
      </section>
	  
	  
	  
	  
	  
	  <section countdown>
	  
        <div 
			id="js-countdown-container"
			style="background-image: linear-gradient(#28303ab5, #28303a), url('<?php echo get_field('countdown_background_image'); ?>')"
			class="t_countdown c_countdown"
		>
			 
          <div class="container">
		  
			  
				<div class="l_row--mob">
				
				  <div class="l_row--tbl">
				  
					<div class="c_countdown-item">
					
					  <div class="l_countdown-item_row">
					  
						<?php 
							$image = get_field('countdown_column_1_image');
							if( !empty( $image ) ): ?>
								<img src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" class="i_countdown" />
						<?php endif; ?>
										
						<span id="number-1" class="t_countdown-stat">
						
							<?php the_field('countdown_column_1_figure') ?>
							
						</span>
					  </div>
					  
					  <div class="l_countdown-item_row c_countdown_dcs">
					  
						<span class="t_countdown-dsc">
						
							<?php the_field('countdown_column_1_description') ?>
						
						</span>
						
					  </div>
					</div>
					
					<div class="c_countdown-item">
					
					  <div class="l_countdown-item_row">
					  
						<?php 
							$image = get_field('countdown_column_2_image');
							if( !empty( $image ) ): ?>
								<img src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" class="i_countdown" />
						<?php endif; ?>
						
						<span id="number-2" class="t_countdown-stat">
						
							<?php the_field('countdown_column_2_figure') ?>
							
						</span>
						
					  </div>
					  <div class="l_countdown-item_row c_countdown_dcs">
					  
						<span class="t_countdown-dsc">
						
							<?php the_field('countdown_column_2_description') ?>
						
						</span>
						
					  </div>
					</div>
				  </div>		  
				  <div class="l_row--tbl">
				  
					<div class="c_countdown-item">
					
					  <div class="l_countdown-item_row">
					  
						<?php 
							$image = get_field('countdown_column_3_image');
							if( !empty( $image ) ): ?>
								<img src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" class="i_countdown" />
						<?php endif; ?>
						
						<span id="number-3" class="t_countdown-stat">
						
							<?php the_field('countdown_column_3_figure') ?>
							
						</span>
						
					  </div>				  
					  <div class="l_countdown-item_row c_countdown_dcs">
					  
						<span class="t_countdown-dsc">
						
							<?php the_field('countdown_column_3_description') ?>
						
						</span>
						
					  </div>
					</div>
					<div class="c_countdown-item">
					
					  <div class="l_countdown-item_row">
					  
						<?php 
							$image = get_field('countdown_column_4_image');
							if( !empty( $image ) ): ?>
								<img src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" class="i_countdown" />
						<?php endif; ?>
						
						<span id="number-4" class="t_countdown-stat">
						
							<?php the_field('countdown_column_4_figure') ?>
							
						</span>
						
					  </div>
					  <div class="l_countdown-item_row c_countdown_dcs">
					  
						<span class="t_countdown-dsc">
						
							<?php the_field('countdown_column_4_description') ?>
						
						</span>
					  </div>
					</div>
				  </div>
			  </div>
			</div>
          </div>
        </div>
      </section>	
	</main>

<?php get_footer();?>

	