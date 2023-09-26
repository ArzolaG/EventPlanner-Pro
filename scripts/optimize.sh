#!/bin/bash

#Directories
website_dir="$(pwd)"
images_dir="$website_dir/assets/img"
css_dir="$website_dir/css"
js_dir="$website_dir/js"

# Function to compress images using ImageMagick
compress_images() {
  echo "Compressing images..."
  mogrify -resize 50% "$images_dir/*"
  echo "Image compression completed."
}

# Function to minify CSS files using clean-css
minify_css() {
  echo "Minifying CSS files..."
  for file in "$css_dir"/*.css; do
    minified_file="${file%.css}.min.css"
    cleancss -o "$minified_file" "$file"
  done
  echo "CSS minification completed."
}

# Function to minify JavaScript files using uglify-js
minify_js() {
  echo "Minifying JavaScript files..."
  for file in "$js_dir"/*.js; do
    minified_file="${file%.js}.min.js"
    uglifyjs "$file" -o "$minified_file"
  done
  echo "JavaScript minification completed."
}

# Main function
main() {
  compress_images
  minify_css
  minify_js
  echo "Website optimization completed."
}

# Execute the main function
main