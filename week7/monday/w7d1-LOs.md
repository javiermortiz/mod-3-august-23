# W7D1

## Design Objectives

Below is a complete list of the design learning objectives for this lesson.
When you complete this lesson, you should be able to perform each of the
following objectives. These objectives capture how you may be evaluated on the
assessment for this lesson.

-   **Select a palette of colors that follow basic color theory**\
    <b><span style="color:CornflowerBlue">Answer:</span></b>

    Two major considerations should be made:

    -   Aesthetics: colors should be complimentary and not clash. Tools to
        assist with picking colors that look great include the following
        -   [Adobe color wheel](https://color.adobe.com/create/color-wheel)
        -   [Google's material design docs](https://material.io/design/color/the-color-system.html)
    -   Accessibility: Colors should be easily distinguishable, including for
        the color-blind. To achieve this, colors should be distinct in hue,
        saturation, and value. Tools to test how an image looks with that
        perspective include:
        -   [color-blindness simulator]()
        -   [Instructions to use the Firefox Accessibility Inspector](https://developer.mozilla.org/en-US/docs/Tools/Accessibility_inspector/Simulation)

-   **Demonstrate a basic understanding of spacing and typography for readable
    interfaces**\
    <b><span style="color:CornflowerBlue">Answer:</span></b>

    -   White Space: The most important design principle for intuitive design is
        white space. Leave empty space surrounding the text, images and
        interactive elements in your website significantly increases the
        legibility and usability. This is especially helpful for mobile friendly
        sites, as it is easy to mis-tap buttons that are too close, and
        difficult to read squashed text.

    -   Typography:
        -   Serif Fonts: Serifs are the small strokes on the ends of letters in
            fonts like Times New Roman. Nowadays serifs are still used for
            newsprint and to improve long-form readability on mobile or
            low-resolution devices.
            ![Serif Font - Times New Roman](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Modular-Curriculum/content/css/HelveticaSpecimenCH.svg)
        -   Sans-Serif Fonts: Sans-serif fonts have no serifs. These are minimal
            and clean: ideal for single words or short-form phrases like
            headlines, icons, navigation. These tend toward larger text size and
            shorter strings of words, making serifs unnecessary. However, this
            is no longer necessary With modern devices due to much higher
            resolutions.
            ![Sans-Serif Font - Helvetica](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Modular-Curriculum/content/css/Times_New_Roman-sample.svg)

-   **Demonstrate familiarity with standard navigation iconography and
    conventions**\
    <b><span style="color:CornflowerBlue">Answer:</span></b>

    There are many common iconography, such as:
    ☰ for menu
    🔍 for search
    ⌂ for home
    ✉ for email

-   **Be able to identify and label HTML elements in a low-res wireframe spec**\
     <b><span style="color:CornflowerBlue">Answer:</span></b>

    ![Wireframe labeled](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Modular-Curriculum/content/css/wireframes_labeled.jpg)

## HTML Fundamentals Objectives

Below is a complete list of the HTML fundamentals learning objectives for this
lesson. When you complete this lesson, you should be able to perform each of
the following objectives. These objectives capture how you may be evaluated on
the assessment for this lesson.

-   **Appropriately structure an HTML page**\
    <b><span style="color:CornflowerBlue">Answer:</span></b>

    <html>
        <body>

            <h2>Lists</h2>
            <h3>Unordered Lists</h3>
            <p>
                Unordered lists are marked with bullet points and go in `ul` tags. Each list item goes in an `li` tag.
            </p>
            <h4>Types of lists:</h4>
            <ul>
                <li>Unordered lists (`ul`)</li>
                <li>Ordered lists (`ol`)</li>
            </ul>

            <h3>Ordered Lists</h3>
            <p>
                Ordered lists are numbered and go in `ol` tags. Each list item goes in an `li` tag.
            </p>
            <h4>Polya's Problem Solving Framework</h4>
            <ol>
                <li>Understand the problem</li>
                <li>Come up with a plan</li>
                <li>Carry out the plan</li>
                <li>Go back and improve your solution</li>
            </ol>

        </body>

    </html>

-   **Identify, utilize, and distinguish common semantic HTML tags**\
    <b><span style="color:CornflowerBlue">Answer:</span></b>

    #### Basic HTML5 structure

    ```html

    ```

    ```html
    <html>
    	<head>
    		<title>My HTML Cheat Sheet</title>
    	</head>
    	<body></body>
    </html>
    ```

    #### Headings

    Headings come in different levels: h1 for the top-level heading, h2 for the top sub-heading, h3 for the next sub-heading. Importantly, every page should have one, and only one h1 tag. Google's web-crawlers will search for the h1 on each page to label the search result. If they don't find one, your will be penalized with lower search rankings.

    ```html
    <h1>This is a top level heading!</h1>
    ```

    #### Paragraphs

    ```html
    <p>Paragraphs of text go in `p` tags.</p>
    ```

    #### Unordered and Ordered Lists

    ```html
    <ul>
    	<li>Unordered lists (`ul`)</li>
    	<li>Ordered lists (`ol`)</li>
    </ul>
    <h4>Polya's Problem Solving Framework</h4>
    <ol>
    	<li>Understand the problem</li>
    	<li>Come up with a plan</li>
    	<li>Carry out the plan</li>
    	<li>Go back and improve your solution</li>
    </ol>
    ```

    #### Links

    ```html
    <a
    	href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a"
    	target="_blank"
    >
    	MDN
    </a>
    ```

    #### Tables

    ```html
    <table>
    	<thead>
    		<tr>
    			<th scope="col">Insect</th>
    			<th scope="col">Family</th>
    			<th scope="col">Fact</th>
    		</tr>
    	</thead>
    	<tbody>
    		<tr>
    			<th scope="row">Ladybug</th>
    			<td>Coccinellidae</td>
    			<td>Can eat more than 5,000 insects!</td>
    		</tr>
    		<tr>
    			<th scope="row">Fruit flies</th>
    			<td>Drosophilidae</td>
    			<td>First living creatures in outer space!</td>
    		</tr>
    		<tr>
    			<th scope="row">Caterpillars</th>
    			<td>Heterobathmiidae</td>
    			<td>Have 12 eyes!</td>
    		</tr>
    	</tbody>
    	<tfoot>
    		<tr>
    			<td></td>
    			<td>I had no ideas!</td>
    			<td>Those are neat!</td>
    		</tr>
    	</tfoot>
    </table>
    ```

-   **Compare and contrast similar semantic HTML tags**

    -   **_div_ vs. _span_ vs. _p_**\
        <b><span style="color:CornflowerBlue">Answer:</span></b>

    [div](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div)
    [span](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span)
    [p](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p)

    -   **_h1_ vs. _h2_ vs. _h3_**\
        <b><span style="color:CornflowerBlue">Answer:</span></b>

    [h1](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h1)
    [h2](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h2)
    [h3](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h3)

    -   **_ol_ vs. _ul_**\
        <b><span style="color:CornflowerBlue">Answer:</span></b>

    [ol](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol)
    [ul](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul)

    -   **_br_ vs. _hr_**\
        <b><span style="color:CornflowerBlue">Answer:</span></b>

    [br](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/br)
    [hr](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hr)

    -   **_link_ vs. _a_**\
        <b><span style="color:CornflowerBlue">Answer:</span></b>

    [link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link)
    [a](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)

    -   **_head_ vs. _header_**\
        <b><span style="color:CornflowerBlue">Answer:</span></b>

    [head](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head)
    [header](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header)

    -   **_head_ vs. _body_ vs. _footer_**\
        <b><span style="color:CornflowerBlue">Answer:</span></b>

    [head](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head)
    [body](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header)
    [footer](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer)

    [MDN Link to HTML elements reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)