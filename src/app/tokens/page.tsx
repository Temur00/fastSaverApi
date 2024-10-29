"use client";

import React, { useState, ChangeEvent } from "react";

interface Token {
  id: number;
  name: string;
  value: string;
  date: string;
}

const Tokens: React.FC = () => {
  const [tokens, setTokens] = useState<Token[]>([]);
  const [editingToken, setEditingToken] = useState<number | null>(null);
  const [editingTokenName, setEditingTokenName] = useState<string>("");
  const [alertVisible, setAlertVisible] = useState<boolean>(false);
  const [tokenToDelete, setTokenToDelete] = useState<number | null>(null);

  const handleCreateToken = () => {
    const newToken: Token = {
      id: Date.now(),
      name: `Token-${tokens.length + 1}`,
      value: "N5m3daBdLs71mfckM3uV4eJs",
      date: new Date().toISOString(),
    };
    setTokens([...tokens, newToken]);
  };

  const handleEditToken = (id: number) => {
    setTokens(
      tokens.map((token) =>
        token.id === id ? { ...token, name: editingTokenName } : token
      )
    );
    setEditingToken(null);
  };

  const handleStartEditing = (id: number, currentName: string) => {
    setEditingToken(id);
    setEditingTokenName(currentName);
  };

  const handleDeleteToken = () => {
    setTokens(tokens.filter((token) => token.id !== tokenToDelete));
    setAlertVisible(false);
  };

  return (
    <main className="bg-black h-screen pt-[100px] sm:pt-[150px] text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#1c113e_85%,#010101_100%)]">
      <div className="container mx-auto px-4 sm:px-0">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6">API Tokens</h1>
        <p className="text-base sm:text-lg mb-4">
          Create tokens and use them to access your API
        </p>

        <button
          onClick={handleCreateToken}
          className="px-4 py-2 bg-blue-500 text-white rounded mb-4"
        >
          Create Token
        </button>

        {tokens.length > 0 && (
          <div className="bg-gray-800 p-4 rounded-lg overflow-x-auto">
            <table className="w-full text-left min-w-[500px] sm:min-w-full">
              <thead>
                <tr>
                  <th className="p-2">Name</th>
                  <th className="p-2">Token</th>
                  <th className="p-2">Date of Creation</th>
                  <th className="p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {tokens.map((token) => (
                  <tr key={token.id}>
                    <td className="p-2">
                      {editingToken === token.id ? (
                        <input
                          type="text"
                          value={editingTokenName}
                          onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setEditingTokenName(e.target.value)
                          }
                          className="bg-gray-700 p-1 rounded text-white"
                        />
                      ) : (
                        token.name
                      )}
                    </td>
                    <td className="p-2">****{token.value.slice(-4)}</td>
                    <td className="p-2">{token.date}</td>
                    <td className="p-2 space-x-2">
                      {editingToken === token.id ? (
                        <button
                          onClick={() => handleEditToken(token.id)}
                          className="px-3 py-1 bg-blue-500 text-white rounded"
                        >
                          Save
                        </button>
                      ) : (
                        <button
                          onClick={() =>
                            handleStartEditing(token.id, token.name)
                          }
                          className="px-3 py-1 bg-blue-500 text-white rounded"
                        >
                          Edit
                        </button>
                      )}
                      <button
                        onClick={() => {
                          setAlertVisible(true);
                          setTokenToDelete(token.id);
                        }}
                        className="px-3 py-1 bg-red-500 text-white rounded"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="mt-6 text-sm bg-gray-900 p-4 rounded">
          <p>To use the API you need to pass "token" in GET parameter:</p>
          <p className="mt-2 text-green-400 tracking-widest">
            curl -X 'GET' \ <br />
            'https://fastsaverapi.com/get-info?url=&#123;url&#125;&token=&#123;Your
            token is here&#125;' \ <br />
            -H 'accept: application/json'
          </p>
        </div>

        {alertVisible && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-gray-800 p-6 rounded-lg max-w-xs w-full mx-4 sm:max-w-md">
              <p className="mb-4">
                Are you sure you want to delete this token?
              </p>
              <button
                onClick={handleDeleteToken}
                className="px-4 py-2 bg-red-500 text-white rounded mr-2"
              >
                Yes, Delete
              </button>
              <button
                onClick={() => setAlertVisible(false)}
                className="px-4 py-2 bg-gray-500 text-white rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Tokens;
