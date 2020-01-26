<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'nathanme_wp879' );

/** MySQL database username */
define( 'DB_USER', 'nathanme_wp879' );

/** MySQL database password */
define( 'DB_PASSWORD', '-92!SI3pc3' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'kq4l41oxoyda6zvltr2ni1iwbdtq07awndwlc6xzgzw6mhntfzpb5aoislx5kukt' );
define( 'SECURE_AUTH_KEY',  'wb5sbewem2a4gtuvjcacqulgqprhpezkvn3gi5tyd24zryj73kay5le9b7xnmvcc' );
define( 'LOGGED_IN_KEY',    'yt0d4ptk6etksdry6h7wtbq8dqa1ooad04tgxfzxsbgu5r4pockm9amh4g1xo0hj' );
define( 'NONCE_KEY',        'c287mgyu36ebsg47pqgh142exqvai4saus4zhcwb9odz1pivepll1zse5bzqlx1c' );
define( 'AUTH_SALT',        '3chcwzzlekbdsghei0hnij1x4cysmfqaxejmukmqdlkypqyqx275kb5ub11p1om3' );
define( 'SECURE_AUTH_SALT', 'knr272ubzs5ju485yjhstlgobygmyefykpdftabptrrazaxmt05wdkdsgybejobp' );
define( 'LOGGED_IN_SALT',   'ph3wdpbbjxit7fwgfwx7br3erc4lnseghudg85ixu97tvlietv3p7p1dwbjhli2h' );
define( 'NONCE_SALT',       '70jfqp3f8eilxlfdsiwv7kuaosmmymwzgh4frun0vowhurfxthcpgdaexbijkhiq' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wpgq_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
