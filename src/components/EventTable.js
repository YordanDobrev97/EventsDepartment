

const EventTable = () => {
    return (
        <div className="row event-table">
            <h3 className="center">Events</h3>

            <table className="highlight centered responsive-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>React</td>
                        <td>Build react.js application</td>
                        <td>12.07.22</td>
                        <td>
                            <button className="waves-effect waves-light btn-small join-btn">Join</button>
                            <button className="waves-effect waves-light btn-small details-btn">Details</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Angular</td>
                        <td>Build Angular application</td>
                        <td>13.07.22</td>
                        <td>
                            <button className="waves-effect waves-light btn-small join-btn">Join</button>
                            <button className="waves-effect waves-light btn-small details-btn">Details</button>
                        </td>
                    </tr>
                </tbody>

                <tfoot>
                    <ul className="pagination">
                        <li className="active"><a href="#!">1</a></li>
                        <li className="waves-effect"><a href="#!">2</a></li>
                        <li className="waves-effect"><a href="#!">3</a></li>
                        <li className="waves-effect"><a href="#!">4</a></li>
                        <li className="waves-effect"><a href="#!">5</a></li>
                    </ul>
                </tfoot>
            </table>
        </div>
    )
}

export default EventTable;