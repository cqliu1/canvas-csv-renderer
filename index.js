export default function(kibana) {
  return new kibana.Plugin({
    require: ['interpreter', 'canvas'],
    name: 'canvas-csv-renderer',
    uiExports: {
      // Tell Kibana that the files in `/public` should be loaded into the
      // browser only when the user is in the Canvas app.
      canvas: ['plugins/canvas-csv-renderer'],
    },

    config(Joi) {
      return Joi.object({
        enabled: Joi.boolean().default(true),
      }).default();
    },
  });
}
