Project Title: Self-conscious website
A website that is very proud of itself to a fault, attempting to prevent the user from leaving and fixing reviews if poor ones are left.

Team members: Thomas W. Role: everything

Features:
-Four pages, all linked to each other. Responsive design that folds header into columns on narrow screens, and uses flexboxes.
-Dark mode toggle, present in bottom left of page
-Custom cursor (Functions as normal on all pages except "Say hi!", in which case the height is modified to add to the illusion of the site controlling the cursor. Tragically it is impossible to actually control the cursor, but we as users of the internet should be grateful for this.)
-HTML Form with JS validation (Requires an alphanumeric name and uses a default if none is provided, must include text in the text area which can be any character, but will remove angle brackets < > to prevent tampering)
-Very nice looking CSS if I do say so myself. Beautiful background gradient in both light and dark mode, text always legible. Shows/hides a popup on the "Say hi!" page, which appears if the cursor attempts to exit via the top of the page.
-localStorage used to store reviews, read upon entering page to display.
-JavaScript present in droves: Used for the custom cursor, controlling the cursor, dark mode toggle, and review page. Handles click events. Review page uses DOM manipulation to add new reviews, and will add new reviews on its own if the calculated review score is below 4.
