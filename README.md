## Exhibition Job board!

### To run it localy:

1. Build the images and run the containers:

    ```
    $ cd backend/
    $ docker-compose -f docker-compose.yml up -d --build
    ```

    Test it out on localhost:8000.

### Let's make it in production via EC2 and PostgreSQL on AWS:

1. Rename *.env.prod-sample* to *.env.prod* and *.env.prod.proxy-companion-sample* to *.env.prod.proxy-companion*. Update the environment variables.
1. Build the images and run the containers:

    ```
    $ docker-compose -f docker-compose.prod.yml up -d --build
    ```

    Test it out.
