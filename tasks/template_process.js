module.exports = function( grunt ) {
    grunt.registerMultiTask('template_process', 'grunt.template.process files', function() {

        // Iterate over all specified file groups.
        this.files.forEach(function(file) {

            var template, out;

            var src = file.src + "";
            var dest = file.dest + "";

            if (!grunt.file.exists(src)) {
                grunt.log.warn('Source file "' + src + '" not found.');
                return false;
            }

            template = grunt.file.read(src);
            out = grunt.template.process(template);

            // Write the destination file.
            grunt.file.write(dest, out);

            // Print a success message.
            grunt.log.writeln('File "' + dest + '" created.');
        });
    });
};