# Release History

## 0.3.3

### Changes
- Add nrows argument to Pandas and CSV full dataset loaders.
- Break OneHot layer into one for range of numbers and one for categorical.
- Add helper decorator to vectorize a function.

### Bug Fixes
- Fix syntax error preventing Input nodes from running.

## 0.3.2

### Bug Fixes
- Version 0.3.1 was completely uninstallable because of trying to load the version file from disk. Fixed.

## 0.3.1

### Changes
- SQLite no longer the default caching database. By default, there is no caching.
- No more cache_result parameter to transform methods. If a database is passed at init, it caches, otherwise not.
- Add support for Sklearn supervised learning models, and Keras models, as layers.

## 0.3.0

### Changes
- Now handling data generators as input.
- Pulled out fit into its own public method, as well as partial_fit.
- Create pipeline by defining inputs and outputs, rather than passing to inputs.
- Re-organize utils module.
- Add sqlite database for storing processed features in such a way that they can be queried.
- Create io module, which holds data generators / datasets for input, feature cache database for output.
- Remove SklearnTransformation wrapper; classes can now be used as long as they adhere to the fit/transform API.
- Adjust naming so that Layer and Node have their own names.
- Name argument for node is now received in the call of the Layer, not its init.
- Observations can be given an index, and by default the index is just integers. This is how cache lookup is done.
- Cache now supports multi-dimensional outputs, such as images.

## 0.2.1

### Changes
- Topological sort now operates on all output nodes at once, producing a single path.
- Caching was re-implemented to align with the new path structure.
- Adapters broken out into input and output modules.
- Rename Graph to Pipeline.
- Add color to graph visualization.

### Bug Fixes
- Lots of syntax errors because I didn't test the last release.

## 0.2.0

### Changes
- Added visualization module for the computation graph. Contributed by @jeremyjordan.
- Calling method on layers takes a list of nodes rather than individual positional arguments.
- Loading and saving Graph functionality uses Dill to correctly pickle functions.
- Added adapters for Pandas data as both Input node creator based on colnames, and as feed dict based on colnames.
- Save memory by removing data from output member of nodes during run when they're not needed anymore.
- Remove custom naming option from nodes and transformations (not Input).
- Remove ability to run nodes by string name; must be actual Node variable.
- Add FeatureSet, a grouping of Nodes for mapping transformations onto.
- Structural change of the package, breaking up core into its components.
- Rename Transformation to Layer.

### Bug Fixes
- Previously was not applying kwargs passed to Lambda init on to transform method.
- Fix postorder traversal so it doesn't duplicate nodes.

## 0.1.1

### Changes
- Added wrapper for sklearn functions as Transformations.
- Give all nodes names, add ability to run a node by name rather than by a variable reference.
- Relax shape validation if input is not a Numpy array.
- Removed utility dictionaries for custom errors.

### Bug Fixes
- Fixed syntax errors in Graph.


## 0.1.0

Initial release.
