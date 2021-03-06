Files for custom NationBuilder theme for ACCEPT

Don't have server access, and can only update theme files through web interface. Therefore, creating repository to track changes and serve as 'source of truth' for modified theme, if needed.

Base theme: 'Headliner' by NationBuilder https://headliner-theme.nationbuilder.com/

Usage notes:

* Pages in templates folder are copied and modified from base theme file. Edit as needed, and simply copy/paste entire file when updating.
* Files in page-content folder are named by page name, and should be copied/pasted in 'source code' view of destination page when updating.
* Files in scripts folder are custom javascript files for use on indicated pages.
  * To add a new script:
    1. Create the file
    2. Upload it to the template
    3. Use a Liquid 'if' statement to conditionally load the file on the correct page(s) in the layout.html template
  * To update a script:
    1. Make updates in file locally. Test via browser console
    2. Find the correct file in 'files' section of theme
    3. Copy and paste the updates (safest to select all and write over entire file on server)
    4. Remember to save!
* To recreate this theme in a new NationBuilder site:
  1. Switch site to 'headliner' theme
  2. Create new custom theme
  3. Copy/paste all files in 'templates' folder into corresponding template files
  4. Upload all files in 'scripts' folder (put them directly in 'files,' don't add a subfolder)
  5. (If you want the pages) Create new pages with the names of the pages in page-content, and then copy & paste the file contents in the 'source code' view of the page content
