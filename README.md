# USNews
CS673 Project


# SQL SCRIPT to set up database on MySQL
CREATE TABLE ARTICLECOMMENTS(COMMENTS varchar(225),USERNAME varchar(225),DATEANDTIME varchar(225),ARTICLEHEADER varchar(225));
CREATE TABLE ARTICLEDETAILS(ARTICLEHEADER varchar(225),ARTICLEDESC varchar(225),ARTICLEAUTHOR varchar(225),ARTICLEURL varchar(225),ARTICLEURLTOIMAGE varchar(225),PUBLISHEDAT varchar(225),CONTENT varchar(225),LIKES varchar(225),SAVES varchar(225),COMMENTS VARCHAR(225));
ADD COLUMN usertype VARCHAR(225) AFTER USERNAME;
ALTER TABLE USERDETAILS
ADD COLUMN likes VARCHAR(225) AFTER CONTACT_NO;
ALTER TABLE USERDETAILS
ADD COLUMN SAVED VARCHAR(225) AFTER likes;
ALTER TABLE USERDETAILS
ADD COLUMN COMMENTS VARCHAR(225) AFTER saved;

insert into ARTICLEDETAILS(ARTICLEHEADER,ARTICLEDESC ,ARTICLEAUTHOR,ARTICLEURL,ARTICLEURLTOIMAGE,PUBLISHEDAT,CONTENT,LIKES,SAVES,COMMENTS) VALUES('Looking for a New Business Idea? Heres How to Identify What People Really Need.','If you can find a niche, underserved need, you and your new business can claim it as your own','Eric ERock Christopher','https://www.entrepreneur.com/article/421003','https://assets.entrepreneur.com/content/3x2/2000/1647527870-GettyImages-1132115714.jpg','2022-03-21T19:00:00Z','As a would-be entrepreneur, it can sometimes be tempting to think that all the good business ideas have already been taken.','0','1','1');
insert into ARTICLECOMMENTS(COMMENTS ,USERNAME ,DATEANDTIME ,ARTICLEHEADER) VALUES('Looking good','rahul','022-03-21T19:00:00','Looking for a New Business Idea? Heres How to Identify What People Really Need.')
