import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useToasts } from 'react-toast-notifications';
import { ResourceFormSchema } from '../utils/schema';

export default function Main() {
  const { addToast } = useToasts();

  return (
    <Formik
      initialValues={{
        url: '',
        description: '',
      }}
      validationSchema={ResourceFormSchema}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        addToast('Saved Successfully', {
          appearance: 'success',
          autoDismiss: true,
        });
        resetForm();
      }}
    >
      {() => (
        <Form>
          <div className="py-10 sm:rounded-md sm:overflow-hidden">
            <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
              <div className="grid grid-cols-3 gap-6">
                <div className="col-span-3 sm:col-span-2">
                  <label
                    htmlFor="url"
                    className="block text-lg font-medium text-gray-700"
                  >
                    Website
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <span className="inline-flex text-lg items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                      https://
                    </span>

                    <Field
                      type="text"
                      name="url"
                      id="url"
                      className="border p-2.5 border-gray-300 text-lg focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm"
                      placeholder="www.example.com"
                    />
                  </div>
                  <ErrorMessage
                    name="url"
                    render={(msg) => <div className="text-red-700">{msg}</div>}
                  />

                  <div className="mt-5">
                    <label
                      htmlFor="description"
                      className="block text-lg font-medium text-gray-700"
                    >
                      Description
                    </label>
                    <div className="mt-1">
                      <Field
                        type="text"
                        name="description"
                        id="description"
                        className="border p-2.5 border-gray-300 text-lg focus:ring-purple-500 focus:border-purple-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm"
                        placeholder="What's it about?"
                      />
                      <ErrorMessage
                        name="description"
                        render={(msg) => (
                          <div className="text-red-700">{msg}</div>
                        )}
                      />
                    </div>
                  </div>

                  <div className="mt-5 text-center">
                    <button
                      type="submit"
                      className="inline-flex text-lg justify-center py-2 px-6 border-2 rounded-md border-purple-500 hover:border-green-500 focus:outline-none"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}
