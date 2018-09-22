from ..core import Transformation
from ..utils import md5_hash, initializer


class SklearnTransformation(Transformation):
    @initializer
    def __init__(self, transformation, name=None):
        super().__init__(name=name)

    def __str__(self):
        # when there's no metadata, string will be empty, which is like a unique null hash
        metadata = {k: v for k, v in self.transformation.__dict__.items() if k[-1] == '_'}
        metadata = ''.join([md5_hash(metadata) for metadata in metadata.values()])
        return '{}{}'.format(self.transformation.__class__.__name__, metadata)

    def fit(self, inputs):
        self.transformation.fit(inputs)

    def transform(self, inputs):
        return self.transformation.transform(inputs)
