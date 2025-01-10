# Spirit Assets Exporter

The Spirit Assets Exporter allows you to **export a list of images** in such a way that it can be immediately used in your production codebase. This specific exporter exports assets in generic fashion, as SVG format, without any additional formatting or generated support files.

## Exporter Output

This exporter will render image assets defined inside one specific brand and will produce flat structure:

⚠️ We only output assets from `icons` directory.

## Naming

The names of icons will be constructed from the original name.

Names follow `icon-name` convention.

This behavior can be fully customized by simply modifying the path generation template file `asset_path.pr`. Simply fork, modify and upload as your version of the exporter. If you have never done this before, [follow our guide to modifying existing exporters](https://developers.supernova.io/latest/building-exporters/cloning-exporters.html).

## Installing

To make the Supernova SVG Asset exporter available for your organization so you can start generating code from your design system, please follow the installation guide in our [developer documentation](https://developers.supernova.io/using-exporters/installing-exporters).

## Useful Links

- To learn more about Supernova, [go visit our website](https://supernova.io)
- To join our community of fellow developers where we try to push what is possible with design systems and code automation, join our [community discord](https://community.supernova.io)
- To understand everything you can do with Supernova and how much time and resources it can save you, go read our [product documentation](https://learn.supernova.io/)
- Finally, to learn everything about what exporters are and how you can integrate with your codebase, go read our [developer documentation](https://developers.supernova.io/)
