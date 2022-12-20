window.SIDEBAR_ITEMS = {"derive":[["Lens",""],["Model",""],["Setter",""]],"enum":[["BorderCornerShape","The shape the default view drawing algorithm should use for handling borders with a given radius."],["Code","Code is the physical position of a key."],["CursorIcon","Describes the icon the mouse cursor should use."],["Display","Display determines whether an entity will be rendered and acted on by the layout system. To make an entity invisible to rendering but still visible to layout, see [Visibility]."],["EnvironmentEvent",""],["GradientDirection","The direction of a linear gradient."],["Key","Key represents the meaning of a keypress."],["KeymapEvent","An event used to interact with a [`Keymap`] at runtime."],["KnobMode",""],["LayoutType","The layout type determines how nodes will be positioned when directed by the parent"],["MenuEvent","Menu control events."],["MouseButton","A mouse button."],["MouseButtonState","The state of a mouse button."],["Orientation","The orientation of a widget, such as a slider or scrollbar"],["Overflow","Determines whether content should be rendered outside of the bounding box of an element."],["PopupEvent",""],["PositionType","The position type determines whether a node will be positioned in-line with its siblings or seperate"],["Propagation","Determines how an event propagates through the tree."],["ProxyEmitError","Errors that might come up when emitting an event via a ContextProxy."],["ScrollEvent",""],["TextEvent",""],["Units","Units which describe spacing and size"],["Visibility","Visibility determines whether an entity will be rendered. An invisible entity will still be acted upon by the layout system. Use [Display] to hide an entity from both rendering and layout."],["WindowEvent","Events generated by the application in response to OS events as well as events that can be used to set properties of the window."]],"fn":[["setup_menu_entry","A helper function which sets up the necessary attributes on a view to be a menu entry. Call this with a handle to an object you would like to be considered a menu entry. It adds an on_over event handler updating the current selected menu entry and binds to said selection, updating the `selected` pseudo-class accordingly and calling the `on_select` and `on_deselect` callbacks appropriately."]],"mod":[["normalized_map",""]],"struct":[["Abilities","Describes the capabilities of a view with respect to user interaction."],["Animation","An id used to reference style animations stored in context."],["AnimationBuilder","A builder for constructing animations."],["Application",""],["ArcTrack","Makes a knob that represents the current value with an arc"],["Binding","A binding view which rebuilds its contents when its observed data changes."],["Button","A simple push button with an action and views inside of it."],["Checkbox","A checkbox used to display and toggle boolean state."],["Color","Describes a color."],["Context","The main storage and control object for a Vizia application."],["ContextProxy","A bundle of data representing a snapshot of the context when a thread was spawned."],["DrawContext","A restricted context used when drawing."],["Dropdown","A dropdown is used to display some state with the ability to open a popup with options to change that state."],["Element","A basic element with no interactivity."],["Entity","An entity is an identifier used to reference a view; to get/set properties in the context."],["Environment",""],["Event","A wrapper around a message, providing metadata on how the event travels through the tree."],["EventContext",""],["GeometryChanged","Flags which determine if the geometry needs to be calculated before layout, and whether the geometry has changed after layout"],["GradientStop","A stop in a gradient, defined by a position and a color."],["HStack","A view which arranges its children into a horizontal stack (row)."],["Handle","A handle to a view which has been already built into the tree."],["Image",""],["KeyChord","A key chord used inside of a `Keymap`."],["Keymap","A keymap that associates key chords with actions."],["KeymapEntry","An entry inside of a `Keymap`."],["Knob",""],["Label","A label used to display text to the screen."],["LanguageIdentifier","`LanguageIdentifier` is a core struct representing a Unicode Language Identifier."],["LinearGradient","Describes a linear gradient."],["List","A view for creating a list of items from a binding to a Vec"],["Localized","A type implementing `Res<String>` which formats a localized message with any number of named arguments."],["Menu","A button containing a menu when you click/hover it."],["MenuButton","A MenuButton is an entry in a menu that can be clicked to perform some action. It has various constructors depending on whether you want to make this button show a check icon conditionally."],["MenuController","A MenuController is a container object which holds a menu. It is responsible for managing the focus of the menu, i.e. grabbing click events until the menu is closed."],["MenuStack","A MenuStack is a stack of views which can be menu entries. The only interesting thing about it is that it builds a MenuData into itself."],["Modifiers","The state of the modifier keys."],["Opacity","The opacity of a view, between 0.0 and 1.0."],["Popup",""],["PopupData",""],["PseudoClass","A bitflag of possible pseudoclasses."],["RadioButton","A radio button used to display and toggle boolean state."],["ScrollData",""],["ScrollView",""],["Scrollbar",""],["Slider","The slider control can be used to select from a continuous set of values."],["Table",""],["TableColumn",""],["Textbox",""],["TickKnob","Makes a round knob with a tick to show the current value"],["Ticks","Adds tickmarks to a knob to show the steps that a knob can be set to. When added to a knob, the knob should be made smaller (depending on span), so the knob doesn’t overlap with the tick marks"],["Tree","The [Tree] describes the tree of entities."],["VStack","A view which arranges its children into a vertical stack (column)."],["WindowDescription","Passed to the window to set initial window properties."],["WindowSize","The logical size of an application window."],["ZStack","A view which overlays its children on top of each other."]],"trait":[["AbilityModifiers","Modifiers for changing the abilities of a view."],["ActionModifiers","Modifiers which add an action callback to a view."],["AnimExt","Trait which provides methods for entities to manipulate linked animations"],["Data",""],["DataContext","A trait for any Context-like object that lets you access stored model data."],["EmitContext",""],["GenerationalId","A trait implemented by any generational id."],["LayoutModifiers","Modifiers for changing the layout properties of a view."],["Lens","A Lens allows the construction of a reference to a piece of some data, e.g. a field of a struct."],["LensExt","Helpers for constructing more complex `Lens`es."],["Model","A trait implemented by application data in order to mutate in response to events."],["Res","A trait for types that can automatically resolve into other types, with or without consulting the Context."],["Setter",""],["StyleModifiers","Modifiers for changing the style properties of a view."],["TextModifiers","Modifiers for changing the text properties of a view."],["TreeExt","Trait which provides methods for querying the tree."],["View","A view is any object which can be displayed on the screen."],["WindowModifiers","Methods for building a window."]],"type":[["Canvas","The canvas we will be drawing to."]]};