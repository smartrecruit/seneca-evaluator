Create Database SmartRecruit

-- Table: registration

-- DROP TABLE registration;

CREATE TABLE registration
(
  username text,
  firstname text,
  lastname text,
  pwd character(50),
  emailid character(50),
  id uuid,
  usertype text,
  approved character(10)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE registration
  OWNER TO postgres;
