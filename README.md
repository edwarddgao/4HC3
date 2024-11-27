## **Campus Study Place Review App: Design Document**

---

### **1. Summary of User Characteristics and Needs**

The primary user group for the Campus Study Place Review App is university students seeking appropriate study spaces within the campus. These users exhibit a range of characteristics that influence their interaction with the app. They have diverse study preferences; some prefer quiet and focused environments such as libraries, while others are more comfortable in collaborative spaces, such as cafes or common areas. The variety in preferences necessitates a platform that allows users to filter and choose the environment best suited to their needs.

Another key characteristic of this user group is their sensitivity to time constraints. University students have tight schedules that may include classes, part-time work, and extracurricular activities. Therefore, they require a tool that quickly provides them with information about the availability and suitability of study spaces at specific times. Additionally, students need access to resources such as Wi-Fi, power outlets, and comfortable seating to be able to work effectively. Ensuring the availability of such resources is essential for enhancing the utility of the app.

The users of the app also face several challenges. Discovering suitable study spaces on campus can be difficult, especially during peak times such as exam periods. Students may waste significant amounts of time searching for an available space. This difficulty is compounded by the lack of real-time information about each space, which often results in students visiting multiple locations before finding an appropriate one. Moreover, the crowdedness of popular study areas is another common issue, leading to frustration and wasted time. Lastly, the app must address the need for up-to-date information, as students rely on accurate, current data to make informed decisions about where to study.

Personal experiences illustrate these challenges well. For instance, during exam periods, many students, myself included, have found it almost impossible to locate a quiet, available study spot without having to physically check multiple places. This lack of information on crowdedness and resource availability creates an inefficient and stressful experience. Therefore, the app aims to resolve these common pain points by providing filtered search capabilities, real-time feedback, and a centralized platform for discovering and sharing study spaces.

---

### **2. Additional Task/Function Description**

An additional function that has been added to the Campus Study Place Review App is the ability for users to add newly discovered study places. This feature allows students to contribute to the app by adding information about study spots that are not already listed, ensuring that the app stays up-to-date and relevant. This function also helps maintain a comprehensive database of all available study locations across the campus.

The addition of this feature strongly aligns with user needs. Many students often come across new or lesser-known study spots, such as small outdoor seating areas or underutilized common rooms, which may not be officially recognized or listed. By allowing users to add these locations, the app not only becomes more dynamic but also more community-driven. This function empowers students to share useful information with their peers, thereby fostering a sense of collaboration and community. Additionally, by keeping the database of study places current, this feature addresses the user challenge of finding real-time information about suitable study spaces. This ensures that users do not miss out on available options simply because they are not listed.

For example, during my time as a student, I once found a quiet study area behind a campus building that very few people knew about. If such a feature had been available, I could have easily shared this information with others, helping them avoid crowded libraries and reducing the frustration associated with finding a good study spot during exam week.

---

### **3. Mapping of Functions to Interface Screens**

The various tasks and functions of the app are clearly mapped to distinct interface screens, ensuring a logical flow that enhances the user experience. The "Study Place Listings" function is hosted on the Home Screen, where users can browse a comprehensive list of available study spots on campus. This screen allows users to gain a quick overview of the available options, making it easier to start their search.

The "Store Favorites and Visited Places" function is assigned to the Favorites Screen, where users can add and revisit their preferred study locations. This screen is designed to help users quickly locate places they know and like, without needing to search through the entire list each time.

The "Search and Filter Places" function is integrated into the Home Screen, where a search bar and filtering options are prominently placed to allow users to refine their search results based on specific criteria such as noise level, crowdedness, and proximity to food services.

The "Reviews and Ratings" function is hosted on the Reviews Screen. When users select a specific study place, they are directed to the Reviews Screen, where they can view existing reviews and submit their own. This helps users make informed decisions based on the experiences of other students.

The "Add New Place" function is accessible through the Add Place Screen. Users can navigate to this screen to input information about new study spots, ensuring that the app’s database remains comprehensive and up-to-date.

---

### **4. Design Justifications for Key Interface Screens**

The design of each key interface screen in the Campus Study Place Review App has been carefully crafted to align with user needs and established user-centered design principles, such as Norman's principles and Gestalt principles, which have informed decisions regarding layout, navigation, and interactivity.

#### **Home Screen (Study Place Listings)**

The Home Screen is designed to provide a clear and accessible overview of all study places available on campus. The layout consists of a prominent search bar at the top, followed by a scrollable list of study places. Each study place includes details such as name, location, noise level, and crowdedness. The rationale for this layout is to enhance visibility, which aligns with Norman's principle of **visibility**. Users can easily see the search function and the list of study places, allowing them to quickly navigate the available options.

The use of Gestalt's principle of **proximity** is evident in the grouping of related information about each study place. For example, details such as location, noise level, and crowdedness are grouped together, making it easier for users to scan and understand the information without feeling overwhelmed. The list format also enables users to browse efficiently, supporting their need for quick access to suitable study spaces.

#### **Favorites Screen**

The Favorites Screen provides users with a personalized list of their favorite study places. This screen features a simple and consistent layout, with favorite places displayed in a similar format as the Home Screen. This consistency helps users build a mental model, aligning with Norman's principle of **consistency**. By using familiar layouts and interaction patterns, users can navigate the Favorites Screen without needing to learn a new interface.

The placement of the Favorites button in the bottom navigation bar ensures that users can access their saved places with minimal effort. This addresses the user need for efficiency, especially for students with tight schedules. The use of **affordances** in the design of the Favorites button helps communicate its functionality, as it appears clickable and is labeled clearly.

#### **Search and Filter Screen**

The search and filter functions are integrated into the Home Screen, making them accessible at the start of the user’s journey. The search bar is positioned prominently at the top of the screen, and dropdown menus are used for filters. This placement aligns with Norman's principle of **natural mapping**, ensuring that users intuitively know where to begin their search.

The filters provide options for noise level, crowdedness, and proximity to food, which are key factors influencing study space selection. By allowing users to narrow their search based on these preferences, the app addresses the challenge of discovering suitable study environments. The dropdown menus use **signifiers** to indicate their functionality, and users can easily understand that they can click to expand the options.

#### **Add Place Screen**

The Add Place Screen is designed to enable users to contribute to the app by adding newly discovered study places. The form layout is organized into clearly labeled sections, with fields for the name, location, noise level, crowdedness, and proximity. The use of **constraints** limits the number of fields to only what is necessary, preventing users from feeling overwhelmed by too much information. This simplicity aligns with Norman's principle of **simplicity**, minimizing the cognitive load on users.

Each input field is labeled clearly, and the use of **affordances** makes it evident where users should enter information. The form also includes a submit button, which provides **feedback** once clicked, ensuring users understand that their input has been successfully submitted. This feedback loop is crucial for maintaining user satisfaction and confidence in the app.

#### **Reviews Screen**

The Reviews Screen allows users to view existing reviews for a study place and add their own feedback. The design of this screen is intended to foster a sense of community by leveraging **social proof**. By displaying reviews from other students, users are encouraged to contribute their own experiences, helping others make informed decisions. The reviews are displayed in a list format, with each review starting with a bullet point, making them easy to read and scan.

The "Add Review" function is placed below the existing reviews, allowing users to contribute immediately after reading others' feedback. This layout follows the principle of **continuity**, guiding the user's eye naturally from reading reviews to adding their own. The text area for submitting reviews includes a placeholder prompt that encourages users to share their thoughts, making the action clear and inviting.

---

### **Conclusion**

The Campus Study Place Review App is designed with a focus on user needs, usability, and effective interaction. By aligning with Norman's principles and Gestalt principles, the design ensures that users can easily navigate the app, find suitable study spaces, contribute new information, and share their experiences. The logical mapping of functions to screens, combined with evidence-based design justifications, demonstrates a thorough understanding of user-centered design concepts. The added functionality of allowing users to contribute newly discovered study places not only keeps the app's database current but also empowers the user community, fostering collaboration and making the app a more valuable tool for all students.

The design choices made throughout the app development are aimed at addressing the common challenges faced by university students while studying on campus, including difficulty in finding suitable spots, avoiding crowded areas, and accessing up-to-date information. By focusing on these user challenges and addressing them through thoughtful interface design, the app ultimately enhances the study experience for its users.
