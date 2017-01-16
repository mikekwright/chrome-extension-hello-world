Chrome Extension - Hello Chrome
=======================================

This is a repo that holds the code to create a custom (very simple) extension, and demonstrates
how you about creating the extension and adding it to chrome.  

## Setting up Chrome

The first thing that we will need to do is to enable `developer mode` for the chrome
extensions.  We can do this by accessing the extension page with the below url:   

        chrome://extensions

Once the extensions page is up there should be a checkbox on the top right labeled
`Developer mode`.  Clicking on this checkbox should bring a set of 3 buttons into 
view, with the first being called `Load unpacked extension...`.   

### Loading our extension

Now that we have developer mode enabled, all that needs to be done for this extension
to be enabled is to load it unpacked.   

1. Click on the button `Load unpacked extension...`
2. Navigate to the `extension` directory of the current repo
3. All done

If things are setup correctly you should see a small icon in your menubar at the
top right which will display the popup for this extension.    

## Reference

This repo is built from watching the tutorial `Hello Extension` from the Pluralsight
video `Creating A Chrome Extension`.   
