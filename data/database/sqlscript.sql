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

-- Table : usercontactinfo
-- DROP TABLE usercontactinfo;
CREATE TABLE usercontactinfo
(
  emailid character(50),
  country text,
  address text,
  phoneno text,
  city text,
  zipcode text,
  approved character(10),
  id uuid
)
WITH (
  OIDS=FALSE
);
ALTER TABLE usercontactinfo
  OWNER TO postgres;

-- Table : usersummaryinfo
-- DROP TABLE usersummaryinfo;

CREATE TABLE usersummaryinfo
(
  emailid character(50),
  summary text,
  approved character(10),
  id uuid
)
WITH (
  OIDS=FALSE
);
ALTER TABLE usersummaryinfo
  OWNER TO postgres;


-- Table : userkeyskils
-- DROP TABLE userkeyskils;

CREATE TABLE userkeyskils
(
  emailid character(50),
  industry text,
  functionalarea text,
  specialization text,
  approved character(10),
  id uuid
)
WITH (
  OIDS=FALSE
);
ALTER TABLE userkeyskils
  OWNER TO postgres;

-- Table : userexperience
-- DROP TABLE userexperience;

CREATE TABLE userexperience 
(
  emailid character(50),
  organization  text,
  currentemployer character(3),
  designation text,
  description text,
  approved character(10),
  id uuid
)
WITH (
  OIDS=FALSE
);
ALTER TABLE userexperience
  OWNER TO postgres;


  -- Table: usereducation

-- DROP TABLE usereducation;

CREATE TABLE usereducation
(
  emailid character(50),
  graduation text,
  specialization text,
  university text,
  description text,
  approved character(10),
  id uuid,
  studytime integer DEFAULT 0
)
WITH (
  OIDS=FALSE
);
ALTER TABLE usereducation
  OWNER TO postgres;
