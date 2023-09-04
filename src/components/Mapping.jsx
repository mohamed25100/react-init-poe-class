import { Component } from "react";

export class Mapping extends Component {
  constructor() {
    super();
   
  }

  render() {
    return (
      <div className="flex justify-center">
        <table className="border-collapse table-fixed w-1/2 text-sm">
          <thead className="bg-black">
            <tr>
              <th className="border-b border-slate-700 p-4 pl-8">Nom</th>
              <th className="border-b border-slate-700 p-4 pl-8">Age</th>
            </tr>
          </thead>
          <tbody className="bg-gray-800">
            {
                this.props.users.map((user) => (
                    <tr key={user.id}>
                    <td className="border-b border-slate-700 p-4 pl-8 text-slate-400 text-center">
                      {user.name}
                    </td>
                    <td className="border-b border-slate-700 p-4 pl-8 text-slate-400 text-center">
                      {user.age}
                    </td>
                   
                  </tr>

                ))
         
            }
          </tbody>
        </table>
      </div>
    );
  }
}