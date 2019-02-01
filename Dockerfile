FROM nginx
RUN rm /etc/nginx/conf.d/*
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
RUN rm -rf /usr/share/nginx/html/*
COPY ./dist/robu-web /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]