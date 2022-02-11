import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
export default function Blog() {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  let initialContents = `<p><img style="display: block; margin-left: auto; margin-right: auto;" title="Tiny Logo" src="https://www.tiny.cloud/docs/images/logos/android-chrome-256x256.png" alt="TinyMCE Logo" width="128" height="128" /></p>
  <h2 style="text-align: center;">Welcome to the TinyMCE Cloud demo!</h2>
  <p>Please try out the features provided in this full featured example (excluding <a href="https://www.tiny.cloud/apps/">Premium Plugins</a> ).</p>

  <h2>Got questions or need help?</h2>
  <ul>
    <li>Our <a class="mceNonEditable" href="//www.tiny.cloud/docs/">documentation</a> is a great resource for learning how to configure TinyMCE.</li>
    <li>Have a specific question? Try the <a href="https://stackoverflow.com/questions/tagged/tinymce" target="_blank" rel="noopener"><code>tinymce</code> tag at Stack Overflow</a>.</li>
    <li>We also offer enterprise grade support as part of <a href="https://www.tiny.cloud/pricing">TinyMCE premium plans</a>.</li>
  </ul>

  <h2>A simple table to play with</h2>
  <table style="border-collapse: collapse; width: 100%;" border="1">
    <thead>
      <tr>
        <th>Product</th>
        <th>Cost</th>
        <th>Really?</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>TinyMCE Cloud</td>
        <td>Get started for free</td>
        <td>YES!</td>
      </tr>
      <tr>
        <td>Plupload</td>
        <td>Free</td>
        <td>YES!</td>
      </tr>
    </tbody>
  </table>

  <h2>Found a bug?</h2>
  <p>If you think you have found a bug please create an issue on the <a href="https://github.com/tinymce/tinymce/issues">GitHub repo</a> to report it to the developers.</p>

  <h2>Finally ...</h2>
  <p>Don't forget to check out our other product <a href="http://www.plupload.com" target="_blank">Plupload</a>, your ultimate upload solution featuring HTML5 upload support.</p>
  <p>Thanks for supporting TinyMCE! We hope it helps you and your users create great content.<br>All the best from the TinyMCE team.</p>`;
  return (
    <>
      abc
      <pre>{process.env.PUBLIC_URL}</pre>
      <img
        src={process.env.PUBLIC_URL + "images/android-chrome-256x256.png"}
        //src="https://lj2gg.csb.app/images/android-chrome-256x256.png"
      />{" "}
      <Editor
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue={initialContents}
        init={{
          selector: "textarea#open-source-plugins",
          plugins:
            "print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons",
          imagetools_cors_hosts: ["picsum.photos"],
          menubar: "file edit view insert format tools table help",
          toolbar:
            "undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl",
          toolbar_sticky: true,
          autosave_ask_before_unload: true,
          autosave_interval: "30s",
          autosave_prefix: "{path}{query}-{id}-",
          autosave_restore_when_empty: false,
          autosave_retention: "2m",
          image_advtab: true,
          link_list: [
            { title: "My page 1", value: "https://www.tiny.cloud" },
            { title: "My page 2", value: "http://www.moxiecode.com" }
          ],
          image_list: [
            { title: "My page 1", value: "https://www.tiny.cloud" },
            { title: "My page 2", value: "http://www.moxiecode.com" }
          ],
          image_class_list: [
            { title: "None", value: "" },
            { title: "Some class", value: "class-name" }
          ],
          importcss_append: true,
          // file_picker_callback: function (callback, value, meta) {
          //   /* Provide file and text for the link dialog */
          //   if (meta.filetype === "file") {
          //     callback("https://www.google.com/logos/google.jpg", {
          //       text: "My text"
          //     });
          //   }

          //   /* Provide image and alt text for the image dialog */
          //   if (meta.filetype === "image") {
          //     callback("https://www.google.com/logos/google.jpg", {
          //       alt: "My alt text"
          //     });
          //   }

          //   /* Provide alternative source and posted for the media dialog */
          //   if (meta.filetype === "media") {
          //     callback("movie.mp4", {
          //       source2: "alt.ogg",
          //       poster: "https://www.google.com/logos/google.jpg"
          //     });
          //   }
          // },
          templates: [
            {
              title: "New Table",
              description: "creates a new table",
              content:
                '<div class="mceTmpl"><table width="98%%"  border="0" cellspacing="0" cellpadding="0"><tr><th scope="col"> </th><th scope="col"> </th></tr><tr><td> </td><td> </td></tr></table></div>'
            },
            {
              title: "Starting my story",
              description: "A cure for writers block",
              content: "Once upon a time..."
            },
            {
              title: "New list with dates",
              description: "New List with dates",
              content:
                '<div class="mceTmpl"><span class="cdate">cdate</span><br /><span class="mdate">mdate</span><h2>My List</h2><ul><li></li><li></li></ul></div>'
            }
          ],
          template_cdate_format: "[Date Created (CDATE): %m/%d/%Y : %H:%M:%S]",
          template_mdate_format: "[Date Modified (MDATE): %m/%d/%Y : %H:%M:%S]",
          height: 600,
          image_caption: true,
          quickbars_selection_toolbar:
            "bold italic | quicklink h2 h3 blockquote quickimage quicktable",
          noneditable_noneditable_class: "mceNonEditable",
          toolbar_mode: "sliding",
          contextmenu: "link image imagetools table",
          // skin: useDarkMode ? "oxide-dark" : "oxide",
          // content_css: useDarkMode ? "dark" : "default",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
          // height: 500,
          // menubar: false,
          // plugins: [
          //   "advlist autolink lists link image charmap print preview anchor",
          //   "searchreplace visualblocks code fullscreen",
          //   "insertdatetime media table paste code help wordcount"
          // ],
          // toolbar:
          //   "undo redo | formatselect | " +
          //   "bold italic backcolor | alignleft aligncenter " +
          //   "alignright alignjustify | bullist numlist outdent indent | " +
          //   "removeformat | help",
          // content_style:
          //   "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          // image_advtab: true,
          // link_list: [
          //   { title: "My page 1", value: "https://www.tiny.cloud" },
          //   { title: "My page 2", value: "http://www.moxiecode.com" }
          // ],
          // image_list: [
          //   { title: "My page 1", value: "https://www.tiny.cloud" },
          //   { title: "My page 2", value: "http://www.moxiecode.com" }
          // ]
        }}
      />{" "}
      <button onClick={log}>Log editor content</button>{" "}
    </>
  );
}
