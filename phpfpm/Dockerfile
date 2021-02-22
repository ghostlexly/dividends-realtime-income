FROM php:7.4.13-fpm
# Install rpm hosts (required)
RUN apt update -y

# Fix permission errors for this user with the mounted partition
RUN usermod -u 7777 www-data

# Install docker php extensions prerequisites and install php extensions
RUN apt install -y zlib1g-dev libicu-dev libpng-dev libjpeg-dev libfreetype6-dev g++
RUN docker-php-ext-install pdo pdo_mysql intl opcache gd

# Install APCu
RUN pecl install apcu && docker-php-ext-enable apcu

# Install locales
RUN apt install -y locales
RUN localedef -i fr_FR -c -f UTF-8 -A /usr/share/locale/locale.alias fr_FR.UTF-8

# Create logs folder
RUN echo "Creating logs folder.."
RUN mkdir /var/log/phpfpm-logs
RUN chown -R www-data:www-data /var/log/phpfpm-logs

# Copy configuration files
RUN echo "Copying configuration files.."
COPY ./php_confs/ /usr/local/etc/php
COPY ./server_confs/ /usr/local/etc/php-fpm.d/

# Copy files
#RUN echo "Copying web files from: ./project-files folder"
#COPY ./project-files /var/www/html/
# where ./project/ is the relative path on host
# and /var/www/html is the absolute path in the image

RUN chown -R www-data:www-data /var/www/html/
