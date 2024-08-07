Assignment Specification: Our First PHP Application

In this next assignment, your application will be a single index.php file with some elements in HTML and some elements in PHP. This also verifies that you can do basic HTML and know how to use the 'pre' tag as well as understand how to switch between PHP and HTML when writing a PHP script. Make sure to save your screen shots JPG or PNG files and keep them less than 1MB. You must include the URL bar in all of your screen shots and the software must be running in your PHP server (i.e. file:// urls will not be accepted)

    Your name must be in the <title> tag like 'Charles Severance PHP'

    There should be an <h1> tag with your name and text like 'Charles Severance PHP'

    You should use a <pre> tag to create ASCII art of the first letter of your name four spaces in from the left margin

    Your code should use PHP to compute the SHA256 of your name and print it out like the sample application. You must compute this in your index.php file. The PHP code to achieve this for 'Charles Severance' is:

     print hash('sha256', 'Charles Severance');

    Open this file

 and copy-paste its contents into a file named fail.php in the same folder as your index.php. Do not alter this file - do not fix the mistake in the code in this file. The goal is to trigger an error to verify that we see errors in the browser.

Open this file

     and copy-paste in the contents into a file named check.php in the same folder as your index.php. Do not alter this file - do not fix the mistake in the code in this file. The goal is to trigger an error to verify that we see errors in the browser.

If you have a problem with the open in a browser and the copy-paste into a file. Then right click on the links above, and depending on your browser use Save As, Save Link As. After saving the file, use your file manager to rename them.

You must run these files in your PHP server. Make a folder under your htdocs folder and then place your files in that folder. The htdocs folder is in different locations depending on your web server:

Windows XAMPP: c:\xampp\htdocs and MAMP: C:\MAMP\htdocs

MAC MAMP:  /Applications/MAMP/htdocs

You may see other options without an htdocs folder, for different operating systems & applications, when an all-in-one installer like MAMP or XAMPP is not used, like Linux. 

Ubuntu: /var/www 

Raspberry Pi: /var/www/html 

You can check the htdocs (a.k.a. DOCUMENT_ROOT) value for your server by scrolling down in your PHPInfo output. You may have changed a setting in your PHP server to move the DOCUMENT_ROOT to another location and that is OK as well.

Just make sure all the files are in a folder somewhere within DOCUMENT_ROOT and that all your testing uses localhost URLs like:

http://localhost:8888/wa4e/php/index.php

If you turn in screen shots with file URLs, like file://,  /folder/file, or c:/folder/file, you will get zero points for the assignment.
What To Hand In

For this assignment you will hand in:

    Image of your application showing the URL bar and the rest of the output.

    Image of your application showing the URL bar and output of fail.php

    Image of your application showing the URL bar output of check.php

    Source code of your index.php

Sample solution

You can explore a sample solution for this problem at https://www.wa4e.com/solutions/php/

Grading

Please do your reviews of the other students submissions carefully. The actual points you award are less important than useful comments about what might be wrong and need fixing. You cannot re-submit your assignment unless the instructor allows you to resubmit.

The total number of points for this assignment is 10. You will get up to 5 points from your instructor. You will get up to 3 points from your peers. You will get 1 for each peer assignment you assess. You need to grade a minimum of 2 peer assignments. You can grade up to 5 peer assignments if you like.