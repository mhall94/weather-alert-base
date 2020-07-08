import * as React from 'react';

import Location from '../interfaces/Location';

interface LocationItemProps {
  item: Location;
  index: number;
  removeLocation: (index: number) => void;
}

class LocationItem extends React.Component<LocationItemProps, {}> {
  constructor(props: any) {
    super(props);

    this.handleRemoval = this.handleRemoval.bind(this);
  }

  handleRemoval(index: number) {
    const { removeLocation } = this.props;

    removeLocation(index);
  }

  render() {
    const { item, index } = this.props;

    // return location name and error message
    return (
      <div>
        <h2>{item.name}</h2>
        <div
          color="secondary"
          onClick={() => {
            this.handleRemoval(index);
          }}
        >
          Remove
        </div>
      </div>
    );
  }
}

export default LocationItem;
