/* Copyright 2015-2016 Teeming Society. Licensed under the Apache License, Version 2.0 (the "License"); DreemGL is a collaboration between Teeming Society & Samsung Electronics, sponsored by Samsung and others.
 You may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
 either express or implied. See the License for the specific language governing permissions and limitations under the License.*/

/**
 * @class DocSourceViewer
 * Source code viewer which is embedded into the docs. You can select the file to be displayed
 * by adding the hash `string #file=example.js` to the URL for this composition, e.g.
 * examples/dreem_in_10/helloworldsource#file=docsourceviewer.js
 */
//
define.class("$server/composition", function (require, $ui$, screen, $widgets$, jsviewer, $server$, fileio) {

	// Composition wide configuration
	this.style = {
		jsviewer: {
			fontsize: 12
			,bgcolor: 'eerieblack'
		}
	};

	this.render = function() {
		return[
				fileio(
					{
						name: 'fileio',
					}),
				screen(
					{
						name: 'default',
						// Loads the source of the file with the filename #file=SOME_FILE using
						// the readSourceFile() function of the embedded fileio class.
						init: function () {
							var sourcefile = ''
							var msg = "No source file specificied! Please specify source file name through hash, e.g. #file=somefile.js"
							if (window.location.hash) {
								var values = window.location.hash.substring(1).split("=");
								if (values[0] == 'file') {
									sourcefile = values[1]
								}
							}
							if (sourcefile === '') {
								this.sourcecode = '/* ' + msg + ' */'
							} else {
								this.rpc.fileio.readfile(define.classPath(this.composition) + sourcefile)
									.then(function (result) {
										if (result.value != null) {
											this.findChild('viewer').source = result.value
										}  else {
											this.findChild('viewer').source = " /* ERROR\n File " + sourcefile + " not found! */"
										}
									}.bind(this));
							}
						},

						// Renders the source code stored in the screen's source code attribute
						render: function () {
							return [
								jsviewer({
									name: 'viewer'
									,flex: 1
									,overflow: 'scroll'
									,source: '// NO SOURCE LOADED'
									,multiline: false
								})
							];
						}
					}
				)
		];
	}
  });
