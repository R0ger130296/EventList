import React, { Component } from 'react';
import { Text, FlatList } from 'react-native';

class EventList extends Component {
    state = {
        events: []
    }

    componentDidMount() {
        const events = require('./db.json').events;
    }

    render() {

        return ( <
            FlatList date = {
                [{ name: 'a' }, { name: 'b' }]
            }
            renderItem = {
                ({ item }) => < Text > { item.name } < /Text>
            }
            KeyExtractor = { item.id }
            />
        );
    }
}
export default EventList;