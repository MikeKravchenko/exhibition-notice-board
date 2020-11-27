## Straightforward job board!

It is the application where you can post and apply for jobs!
Backend is made by Django and Postgres, React was chosen for frontend.

### To run it locally:

1. Build the images and run the containers:

   ```
   $ docker-compose -f ./backend/docker-compose.yml up -d --build
   ```

   Test it out on localhost:8000.

1. To delete abd clean up:
   ```
   $ docker-compose -f ./backend/docker-compose.yml down -v --rmi all
   ```

### Let's make it in production via EC2 and PostgreSQL on AWS:

1. Rename _.env.prod-sample_ to _.env.prod_ and _.env.prod.proxy-companion-sample_ to _.env.prod.proxy-companion_. Update the environment variables.
1. Build the images and run the containers:

   ```
   $ docker-compose -f docker-compose.prod.yml up -d --build
   ```

   Test it out.
