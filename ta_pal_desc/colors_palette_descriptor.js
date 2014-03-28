/* Copyright (c) 2014 Jorge Alberto Gómez López <gomezlopez.jorge96@gmail.com>
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with this program. If not, see <http://www.gnu.org/licenses/>.*/

function ColorsPaletteDesc(){
    this.descriptors = [];
    this.init_descriptor();
}

ColorsPaletteDesc.prototype = {
    constructor: ColorsPaletteDesc,
    init_descriptor: function(){
        var block_descriptor = new BlockDescriptor([NA_ARRANGE, 'block_res/box.svg'], 'box', null, get_color_value, ['red_block', DEFAULT_LANG, FACTORY_SIDE, this.descriptors]);

        var block_descriptor = new BlockDescriptor([NA_ARRANGE, 'block_res/box.svg'], 'box', null, get_color_value, ['green_block', DEFAULT_LANG, FACTORY_SIDE, this.descriptors]);

        var block_descriptor = new BlockDescriptor([NA_ARRANGE, 'block_res/box.svg'], 'box', null, get_color_value, ['purple_block', DEFAULT_LANG, FACTORY_SIDE, this.descriptors]);

        var block_descriptor = new BlockDescriptor([NA_ARRANGE, 'block_res/box.svg'], 'box', null, get_color_value, ['orange_block', DEFAULT_LANG, FACTORY_SIDE, this.descriptors]);

        var block_descriptor = new BlockDescriptor([NA_ARRANGE, 'block_res/box.svg'], 'box', null, get_color_value, ['cyan_block', DEFAULT_LANG, FACTORY_SIDE, this.descriptors]);

        var block_descriptor = new BlockDescriptor([NA_ARRANGE, 'block_res/box.svg'], 'box', null, get_color_value, ['white_block', DEFAULT_LANG, FACTORY_SIDE, this.descriptors]);

        var block_descriptor = new BlockDescriptor([NA_ARRANGE, 'block_res/box.svg'], 'box', null, get_color_value, ['yellow_block', DEFAULT_LANG, FACTORY_SIDE, this.descriptors]);

        var block_descriptor = new BlockDescriptor([NA_ARRANGE, 'block_res/box.svg'], 'box', null, get_color_value, ['blue_block', DEFAULT_LANG, FACTORY_SIDE, this.descriptors]);

        var block_descriptor = new BlockDescriptor([NA_ARRANGE, 'block_res/box.svg'], 'box', null, get_color_value, ['black_block', DEFAULT_LANG, FACTORY_SIDE, this.descriptors]);
    },
    get_block_descriptor: function(name){
        return this.descriptors[name];
    }
}
