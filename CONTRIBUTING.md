<div><h2>How to Contribute</h2>
<p>This has a <abbr title="Knyle Style Sheets">KSS</abbr> node base, so learn a bit about <a href="https://github.com/kss-node/kss-node/wiki/Quick-Start-Guide" target="_blank">how KSS node works</a>.</p>
<p>To make local changes to components, do the following:</p>
<ul>
<li>Fork the project</li>
<li>Navigate to the project root (a11y_style_guide)</li>
<li><code>nvm install stable</code> (only need to do once - see the <a href="https://github.com/creationix/nvm" target="_blank"><abbr title="node version manager">NVM</abbr> project</a> for troubleshooting)</li>
<li><code>nvm use stable</code></li>
<li><code>npm install</code> (only need to do once)</li>
<li><code>git checkout -b my-new-feature</code> (create your feature branch)</li>
<li>Make changes</li>
<li><code>npm run gulp</code> (this will run all the gulp commands)</li>
<li><code>git commit -A</code> (adds all changes)</li>
<li><code>git commit -m "Add some feature"</code> (commit your changes)</li>
<li><code>git push origin my-new-feature</code> (push to the branch)</li>
<li>Create new Pull Request</li>
</ul>
<p>This will run all the gulp commands including the style guide update. If you want to contribute back, please do so! This is a great <a href="https://www.atlassian.com/git" target="_blank">Git resource</a> if you need to brush-up on your skills (all levels)</p></div>
<div>
<div><h2>Tips and Tricks</h2>
  <ul>
    <li>Make all of your changes in the <code>src</code> folder or your changes will be overwritten on the next <code>gulp</code> command.</li>
    <li>If you add a JS file, you must add the script to the bottom of the <code>index.twig</code> file in the <code>style-guide</code> folder, otherwise the script will not be added to the page.</li>
    <li>Once you are done making changes to the patterns, you can easily update the doc folders by these commands (or let a repo manager do it):<br><code>npm run gulp clean:docs</code> - Removes old code from /docs except index and jeckyll settings<br>
<code>npm run gulp move:docs</code> - Move items from /dist to /docs.
</li>
</div>
