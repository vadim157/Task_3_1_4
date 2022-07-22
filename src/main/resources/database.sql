CREATE TABLE users
(
    id       INT          NOT NULL AUTO_INCREMENT,
    name     VARCHAR(100) NOT NULL,
    surname  VARCHAR(100) NOT NULL,
    email    VARCHAR(100) NOT NULL,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE roles
(
    id   INT          NOT NULL AUTO_INCREMENT PRIMARY KEY ,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE user_roles
(
    user_id  INT NOT NULL,
    roles_id INT NOT NULL,

    FOREIGN KEY (user_id) REFERENCES users (id),
    FOREIGN KEY (roles_id) REFERENCES roles (id),
    UNIQUE (user_id, roles_id)


);

INSERT INTO users (name, surname, email, username, password) VALUE ('Vadim','Trofimets','trofimets@inbox.ru','drovosek','$2a$10$QSgbwKuQUWOtw74OG/ch7elNA3Cejg7mUthFC5KmxFBbzI59PMsvq');

INSERT INTO roles (name) VALUE ('ROLE_USER');
INSERT INTO roles (name) VALUE ('ROLE_ADMIN');

INSERT INTO user_roles values (1,1);

